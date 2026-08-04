/**
 * Small, static UI behaviors for the Print3x showcase.
 *
 * Every behavior is opt-in through a data-p3x-* attribute. This keeps pages
 * without content safe and avoids any dependency on Shopify or external services.
 */

const READY_ATTRIBUTES = {
  details: 'data-p3x-details-ready',
  gallery: 'data-p3x-gallery-ready',
  media: 'data-p3x-media-ready',
  search: 'data-p3x-search-ready',
  share: 'data-p3x-share-ready',
  slider: 'data-p3x-slider-ready',
} as const;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type SearchEntry = {
  title: string;
  url: string;
  text?: string;
};

type SearchEventDetail = {
  query: string;
  results: SearchEntry[];
  root: HTMLElement;
};

function elementsInScope<T extends Element>(scope: ParentNode, selector: string): T[] {
  const elements = Array.from(scope.querySelectorAll<T>(selector));

  if (scope instanceof Element && scope.matches(selector)) {
    elements.unshift(scope as T);
  }

  return elements;
}

function markAsReady(element: Element, attribute: string): boolean {
  if (element.hasAttribute(attribute)) return false;

  element.setAttribute(attribute, '');
  return true;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

function setControlDisabled(control: HTMLElement, disabled: boolean): void {
  if (control instanceof HTMLButtonElement) control.disabled = disabled;

  control.setAttribute('aria-disabled', String(disabled));
}

function setToggleLabel(toggle: HTMLElement, paused: boolean): void {
  const pauseLabel = toggle.dataset.p3xSliderPauseLabel ?? 'Pausar carrusel';
  const resumeLabel = toggle.dataset.p3xSliderResumeLabel ?? 'Reanudar carrusel';
  const label = paused ? resumeLabel : pauseLabel;

  toggle.setAttribute('aria-label', label);
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.classList.toggle('slideshow__autoplay--paused', paused);

  const visibleLabel = toggle.querySelector<HTMLElement>('[data-p3x-slider-toggle-label]');
  if (visibleLabel) visibleLabel.textContent = label;
}

function setupSliders(scope: ParentNode): void {
  elementsInScope<HTMLElement>(scope, '[data-p3x-slider]').forEach((slider) => {
    if (!markAsReady(slider, READY_ATTRIBUTES.slider)) return;

    const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-p3x-slide]')).filter(
      (slide) => slide.closest('[data-p3x-slider]') === slider,
    );

    if (slides.length === 0) return;

    const mode = slider.dataset.p3xSliderMode === 'scroll' ? 'scroll' : 'slideshow';
    const loop = slider.dataset.p3xSliderLoop !== 'false';
    const keyboardEnabled = slider.dataset.p3xSliderKeyboard !== 'false';
    const configuredAutoplay = Number.parseInt(slider.dataset.p3xSliderAutoplay ?? '', 10);
    const autoplayMs = Number.isFinite(configuredAutoplay) && configuredAutoplay > 0 ? configuredAutoplay : 0;
    const reducedMotion = prefersReducedMotion();
    const autoplayEnabled = autoplayMs > 0 && slides.length > 1 && !reducedMotion;
    const previousControls = Array.from(slider.querySelectorAll<HTMLElement>('[data-p3x-slider-prev]')).filter(
      (control) => control.closest('[data-p3x-slider]') === slider,
    );
    const nextControls = Array.from(slider.querySelectorAll<HTMLElement>('[data-p3x-slider-next]')).filter(
      (control) => control.closest('[data-p3x-slider]') === slider,
    );
    const directControls = Array.from(slider.querySelectorAll<HTMLElement>('[data-p3x-slider-to]')).filter(
      (control) => control.closest('[data-p3x-slider]') === slider,
    );
    const toggle = slider.querySelector<HTMLElement>('[data-p3x-slider-toggle]');
    const status = slider.querySelector<HTMLElement>('[data-p3x-slider-status]');

    if (slider.getAttribute('aria-roledescription') === null) {
      slider.setAttribute('aria-roledescription', 'carousel');
    }

    slides.forEach((slide, index) => {
      if (slide.getAttribute('role') === null) slide.setAttribute('role', 'group');
      if (slide.getAttribute('aria-roledescription') === null) slide.setAttribute('aria-roledescription', 'slide');
      if (slide.getAttribute('aria-label') === null) slide.setAttribute('aria-label', `${index + 1} / ${slides.length}`);
    });

    let activeIndex = slides.findIndex((slide) => slide.hasAttribute('data-p3x-slide-active'));
    if (activeIndex < 0) activeIndex = slides.findIndex((slide) => slide.getAttribute('aria-current') === 'true');
    if (activeIndex < 0) activeIndex = 0;

    let paused = !autoplayEnabled;
    let timer: number | undefined;

    const clearTimer = () => {
      if (timer === undefined) return;

      window.clearTimeout(timer);
      timer = undefined;
    };

    const updateControls = () => {
      const atStart = activeIndex === 0;
      const atEnd = activeIndex === slides.length - 1;

      previousControls.forEach((control) => setControlDisabled(control, !loop && atStart));
      nextControls.forEach((control) => setControlDisabled(control, !loop && atEnd));

      directControls.forEach((control) => {
        const targetIndex = Number.parseInt(control.dataset.p3xSliderTo ?? '', 10);
        control.setAttribute('aria-current', String(targetIndex === activeIndex));
      });
    };

    const updateActiveSlide = (nextIndex: number, shouldScroll = true) => {
      activeIndex = nextIndex;
      slider.dataset.p3xSliderIndex = String(activeIndex);

      slides.forEach((slide, index) => {
        const active = index === activeIndex;
        slide.toggleAttribute('data-p3x-slide-active', active);
        slide.setAttribute('aria-hidden', String(mode === 'slideshow' && !active));

        if (mode === 'slideshow') slide.hidden = !active;
      });

      if (status) {
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.textContent = `${activeIndex + 1} / ${slides.length}`;
      }

      updateControls();

      if (mode === 'scroll' && shouldScroll) {
        const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';
        slides[activeIndex].scrollIntoView({ behavior, block: 'nearest', inline: 'nearest' });
      }
    };

    const scheduleNext = () => {
      clearTimer();
      if (paused || !autoplayEnabled || !slider.isConnected) return;

      timer = window.setTimeout(() => {
        timer = undefined;
        if (document.hidden) {
          scheduleNext();
          return;
        }

        const nextIndex = activeIndex === slides.length - 1 ? (loop ? 0 : activeIndex) : activeIndex + 1;
        if (nextIndex === activeIndex) {
          setPaused(true);
          return;
        }

        updateActiveSlide(nextIndex);
        scheduleNext();
      }, autoplayMs);
    };

    const setPaused = (nextPaused: boolean) => {
      paused = nextPaused;
      slider.dataset.p3xSliderState = paused ? 'paused' : 'running';
      if (toggle) setToggleLabel(toggle, paused);

      if (paused) clearTimer();
      else scheduleNext();
    };

    const move = (direction: -1 | 1) => {
      let nextIndex = activeIndex + direction;

      if (nextIndex < 0) nextIndex = loop ? slides.length - 1 : 0;
      if (nextIndex >= slides.length) nextIndex = loop ? 0 : slides.length - 1;

      if (nextIndex !== activeIndex) updateActiveSlide(nextIndex);
      scheduleNext();
    };

    const goTo = (targetIndex: number) => {
      if (!Number.isInteger(targetIndex) || targetIndex < 0 || targetIndex >= slides.length) return;

      updateActiveSlide(targetIndex);
      scheduleNext();
    };

    updateActiveSlide(activeIndex, false);

    if (toggle) {
      if (autoplayMs === 0) {
        toggle.hidden = true;
      } else if (reducedMotion) {
        setControlDisabled(toggle, true);
        setToggleLabel(toggle, true);
        toggle.dataset.p3xSliderReducedMotion = 'true';
      } else {
        toggle.addEventListener('click', (event) => {
          event.preventDefault();
          setPaused(!paused);
        });
      }
    }

    previousControls.forEach((control) => {
      control.addEventListener('click', (event) => {
        event.preventDefault();
        if (!control.hasAttribute('disabled') && control.getAttribute('aria-disabled') !== 'true') move(-1);
      });
    });

    nextControls.forEach((control) => {
      control.addEventListener('click', (event) => {
        event.preventDefault();
        if (!control.hasAttribute('disabled') && control.getAttribute('aria-disabled') !== 'true') move(1);
      });
    });

    directControls.forEach((control) => {
      control.addEventListener('click', (event) => {
        event.preventDefault();
        goTo(Number.parseInt(control.dataset.p3xSliderTo ?? '', 10));
      });
    });

    if (keyboardEnabled) {
      slider.addEventListener('keydown', (event) => {
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        } else if (event.key === 'Home') {
          event.preventDefault();
          goTo(0);
        } else if (event.key === 'End') {
          event.preventDefault();
          goTo(slides.length - 1);
        }
      });
    }

    setPaused(!autoplayEnabled);
  });
}

function getGalleryMediaId(media: HTMLElement): string | null {
  const id = media.dataset.p3xGalleryMedia?.trim();
  return id || null;
}

function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return;

  const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
  if (focusable.length === 0) {
    event.preventDefault();
    container.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupGalleries(scope: ParentNode): void {
  elementsInScope<HTMLElement>(scope, '[data-p3x-gallery]').forEach((gallery) => {
    if (!markAsReady(gallery, READY_ATTRIBUTES.gallery)) return;

    const media = Array.from(gallery.querySelectorAll<HTMLElement>('[data-p3x-gallery-media]')).filter(
      (item) => item.closest('[data-p3x-gallery]') === gallery && getGalleryMediaId(item) !== null,
    );
    if (media.length === 0) return;

    const mediaById = new Map(media.map((item) => [getGalleryMediaId(item) as string, item]));
    const thumbnails = Array.from(gallery.querySelectorAll<HTMLElement>('[data-p3x-gallery-thumb]')).filter(
      (item) => item.closest('[data-p3x-gallery]') === gallery,
    );
    const status = gallery.querySelector<HTMLElement>('[data-p3x-gallery-status]');
    const stacked = gallery.dataset.p3xGalleryDisplay === 'stacked';
    const modal = gallery.querySelector<HTMLElement>('[data-p3x-gallery-modal]');
    const nativeDialog = modal instanceof HTMLDialogElement ? modal : null;
    const nativeModal = nativeDialog !== null;
    const closeButton = modal?.querySelector<HTMLElement>('[data-p3x-gallery-close]');
    const modalContent = modal?.querySelector<HTMLElement>('[data-p3x-gallery-modal-content]') ?? modal;
    let activeId =
      media.find((item) => item.hasAttribute('data-p3x-gallery-active'))?.dataset.p3xGalleryMedia ??
      thumbnails.find((item) => item.getAttribute('aria-current') === 'true')?.dataset.p3xGalleryTarget ??
      getGalleryMediaId(media[0])!;
    let lastOpener: HTMLElement | null = null;
    let modalIsOpen = false;

    const updateGallery = (id: string) => {
      const activeMedia = mediaById.get(id);
      if (!activeMedia) return;

      activeId = id;
      gallery.dataset.p3xGalleryActive = id;

      media.forEach((item) => {
        const active = item === activeMedia;
        item.toggleAttribute('data-p3x-gallery-active', active);
        item.setAttribute('aria-hidden', String(!stacked && !active));
        if (!stacked) item.hidden = !active;
      });

      thumbnails.forEach((thumbnail) => {
        const selected = thumbnail.dataset.p3xGalleryTarget === activeId;
        thumbnail.toggleAttribute('data-p3x-gallery-selected', selected);
        thumbnail.setAttribute('aria-current', String(selected));
      });

      const position = media.indexOf(activeMedia) + 1;
      if (status) {
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.textContent = `${position} / ${media.length}`;
      }
    };

    const finishClose = (restoreFocus: boolean) => {
      const opener = lastOpener;
      lastOpener = null;
      modalIsOpen = false;
      document.body.classList.remove('overflow-hidden');

      if (modal && !nativeModal) {
        modal.hidden = true;
        modal.removeAttribute('open');
      }

      if (restoreFocus && opener?.isConnected) opener.focus();
    };

    const closeModal = (restoreFocus = true) => {
      if (!modal) return;

      const isOpen = modalIsOpen || Boolean(nativeDialog?.open) || (!nativeDialog && !modal.hidden);
      if (!isOpen) return;

      modalIsOpen = false;
      if (nativeDialog?.open) nativeDialog.close();
      finishClose(restoreFocus);
    };

    const openModal = (opener: HTMLElement) => {
      if (!modal) return;

      const activeMedia = mediaById.get(activeId);
      const image = activeMedia?.querySelector<HTMLImageElement>('[data-p3x-gallery-image], img');
      if (!image || !modalContent) return;

      const oldImage = modalContent.querySelector('[data-p3x-gallery-modal-image]');
      oldImage?.remove();

      const modalImage = image.cloneNode(true) as HTMLImageElement;
      const fullSource = image.dataset.p3xGalleryFullSrc ?? image.dataset.fullSrc;
      if (fullSource) {
        modalImage.src = fullSource;
        modalImage.removeAttribute('srcset');
      }
      modalImage.removeAttribute('id');
      modalImage.setAttribute('data-p3x-gallery-modal-image', '');
      modalImage.setAttribute('tabindex', '-1');
      modalContent.append(modalImage);

      lastOpener = opener;
      modalIsOpen = true;
      modal.hidden = false;
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');

      if (nativeDialog) {
        if (!nativeDialog.open) {
          try {
            nativeDialog.showModal();
          } catch {
            modal.setAttribute('open', '');
          }
        }
      } else {
        modal.setAttribute('open', '');
      }

      document.body.classList.add('overflow-hidden');
      window.requestAnimationFrame(() => (closeButton ?? modalImage).focus());
    };

    updateGallery(activeId);

    gallery.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;

      const thumbnail = event.target.closest<HTMLElement>('[data-p3x-gallery-thumb]');
      if (thumbnail && thumbnail.closest('[data-p3x-gallery]') === gallery) {
        const target = thumbnail.dataset.p3xGalleryTarget;
        if (target && mediaById.has(target)) {
          event.preventDefault();
          updateGallery(target);
        }
        return;
      }

      const opener = event.target.closest<HTMLElement>('[data-p3x-gallery-open]');
      if (opener && opener.closest('[data-p3x-gallery]') === gallery) {
        event.preventDefault();
        const target = opener.dataset.p3xGalleryTarget;
        if (target && mediaById.has(target)) updateGallery(target);
        openModal(opener);
      }
    });

    gallery.addEventListener('keydown', (event) => {
      if (!(event.target instanceof Element)) return;

      const thumbnail = event.target.closest<HTMLElement>('[data-p3x-gallery-thumb]');
      if (!thumbnail || thumbnail.closest('[data-p3x-gallery]') !== gallery) return;

      const currentIndex = thumbnails.indexOf(thumbnail);
      if (currentIndex < 0) return;

      let nextIndex = currentIndex;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex -= 1;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex += 1;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = thumbnails.length - 1;
      if (nextIndex === currentIndex) return;
      if (nextIndex < 0 || nextIndex >= thumbnails.length) return;

      event.preventDefault();
      const nextThumbnail = thumbnails[nextIndex];
      const target = nextThumbnail.dataset.p3xGalleryTarget;
      if (!target || !mediaById.has(target)) return;

      updateGallery(target);
      nextThumbnail.focus();
    });

    if (modal) {
      if (!nativeModal) modal.hidden = true;

      closeButton?.addEventListener('click', () => closeModal());
      modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(false);
      });
      modal.addEventListener('cancel', (event) => {
        event.preventDefault();
        closeModal();
      });
      modal.addEventListener('close', () => {
        if (modalIsOpen) closeModal();
      });
      modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeModal();
        } else if (!nativeModal) {
          trapFocus(modal, event);
        }
      });
    }
  });
}

function setupDetails(scope: ParentNode): void {
  const roots = elementsInScope<HTMLElement>(scope, '[data-p3x-accordion], details[data-p3x-details]');

  roots.forEach((root) => {
    if (root.hasAttribute(READY_ATTRIBUTES.details)) return;

    const details: HTMLDetailsElement[] = root instanceof HTMLDetailsElement
      ? [root]
      : Array.from(root.querySelectorAll<HTMLDetailsElement>('details'));
    const pendingDetails = details.filter((detail) => !detail.hasAttribute(READY_ATTRIBUTES.details));
    if (pendingDetails.length === 0) {
      root.setAttribute(READY_ATTRIBUTES.details, '');
      return;
    }

    pendingDetails.forEach((detail) => {
      const summary = detail.querySelector<HTMLElement>('summary');
      if (!summary) return;

      detail.setAttribute(READY_ATTRIBUTES.details, '');

      const syncState = () => summary.setAttribute('aria-expanded', String(detail.open));
      syncState();
      detail.addEventListener('toggle', syncState);
      detail.addEventListener('focusout', () => {
        window.setTimeout(() => {
          if (detail.open && !detail.contains(document.activeElement)) detail.removeAttribute('open');
        });
      });
    });

    root.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !(event.target instanceof Element)) return;

      const detail = event.target.closest<HTMLDetailsElement>('details');
      if (!detail || !root.contains(detail) || !detail.open) return;

      event.preventDefault();
      event.stopPropagation();
      detail.removeAttribute('open');
      detail.querySelector<HTMLElement>('summary')?.focus();
    });

    if (root.dataset.p3xAccordion === 'single') {
      pendingDetails.forEach((detail) => {
        detail.addEventListener('toggle', () => {
          if (!detail.open) return;

          details.forEach((other) => {
            if (other !== detail && other.parentElement === detail.parentElement) other.removeAttribute('open');
          });
        });
      });
    }

    root.setAttribute(READY_ATTRIBUTES.details, '');
  });
}

function showMediaPlaceholder(root: HTMLElement, visible: boolean): HTMLElement {
  let placeholder = root.querySelector<HTMLElement>('[data-p3x-media-placeholder]');

  if (!placeholder) {
    placeholder = document.createElement('p');
    placeholder.setAttribute('data-p3x-media-placeholder', '');
    placeholder.textContent = root.dataset.p3xMediaPlaceholderText ?? 'Media pendiente';
    root.append(placeholder);
  }

  placeholder.hidden = !visible;
  return placeholder;
}

function setupDeferredMedia(scope: ParentNode): void {
  elementsInScope<HTMLElement>(scope, '[data-p3x-deferred-media]').forEach((root) => {
    if (!markAsReady(root, READY_ATTRIBUTES.media)) return;

    const trigger = root.querySelector<HTMLElement>('[data-p3x-media-trigger]');
    const template = root.querySelector<HTMLTemplateElement>('[data-p3x-media-template]');
    const approved = root.dataset.p3xMediaApproved === 'true';
    const hasTemplateContent = Boolean(template && (template.content.childElementCount > 0 || template.content.textContent?.trim()));
    const placeholder = showMediaPlaceholder(root, false);

    root.querySelectorAll<HTMLVideoElement>('video').forEach((video) => {
      video.autoplay = false;
      video.removeAttribute('autoplay');
    });

    if (!approved || !hasTemplateContent || !template) {
      root.dataset.p3xMediaState = 'pending';
      root.removeAttribute('loaded');
      placeholder.hidden = false;
      if (trigger) setControlDisabled(trigger, true);
      trigger?.addEventListener('click', (event) => event.preventDefault());
      return;
    }

    root.dataset.p3xMediaState = 'ready';
    const hasPoster = Boolean(root.querySelector('[data-p3x-media-poster], .deferred-media__poster, img'));
    placeholder.hidden = hasPoster;

    trigger?.addEventListener('click', (event) => {
      event.preventDefault();
      if (root.dataset.p3xMediaState === 'loaded') return;

      const content = template.content.cloneNode(true);
      const contentTarget = root.querySelector<HTMLElement>('[data-p3x-media-content]') ?? root;
      contentTarget.append(content);
      template.remove();

      root.dataset.p3xMediaState = 'loaded';
      root.setAttribute('loaded', '');
      placeholder.hidden = true;
      trigger.hidden = true;
      root.querySelectorAll<HTMLVideoElement>('video').forEach((video) => {
        video.autoplay = false;
        video.removeAttribute('autoplay');
      });

      root.dispatchEvent(new CustomEvent('print3x:media-loaded', { bubbles: true, detail: { root } }));
    });
  });
}

function isSearchEntry(value: unknown): value is SearchEntry {
  if (!value || typeof value !== 'object') return false;

  const record = value as Record<string, unknown>;
  return typeof record.title === 'string' && typeof record.url === 'string';
}

function readSearchIndex(root: HTMLElement): SearchEntry[] {
  const selector = root.dataset.p3xSearchIndex;
  if (!selector) return [];

  let indexElement: Element | null = null;
  try {
    indexElement = document.querySelector(selector);
  } catch {
    return [];
  }

  if (!indexElement) return [];

  try {
    const parsed: unknown = JSON.parse(indexElement.textContent ?? '');
    return Array.isArray(parsed) ? parsed.filter(isSearchEntry) : [];
  } catch {
    return [];
  }
}

function searchEntryText(entry: SearchEntry): string {
  return `${entry.title} ${entry.text ?? ''}`.toLocaleLowerCase();
}

function setupSearch(scope: ParentNode): void {
  elementsInScope<HTMLElement>(scope, '[data-p3x-search]').forEach((root) => {
    if (!markAsReady(root, READY_ATTRIBUTES.search)) return;

    const form =
      root.querySelector<HTMLFormElement>('[data-p3x-local-form]') ??
      root.querySelector<HTMLFormElement>('[data-p3x-search-form]');
    const input =
      root.querySelector<HTMLInputElement>('[data-p3x-search-input]') ?? form?.querySelector<HTMLInputElement>('input[type="search"]');
    if (!input) return;

    const reset = root.querySelector<HTMLElement>('[data-p3x-search-reset]');
    const resultsContainer = root.querySelector<HTMLElement>('[data-p3x-search-results]');
    const emptyState = root.querySelector<HTMLElement>('[data-p3x-search-empty]');
    const status = root.querySelector<HTMLElement>('[data-p3x-search-status]');
    const index = readSearchIndex(root);
    const limitValue = Number.parseInt(root.dataset.p3xSearchLimit ?? '', 10);
    const limit = Number.isFinite(limitValue) && limitValue > 0 ? limitValue : 50;

    const applySearch = () => {
      const query = input.value.trim().toLocaleLowerCase();
      const matches = index
        .filter((entry) => query.length === 0 || searchEntryText(entry).includes(query))
        .filter((entry) => entry.url.startsWith('/') && !entry.url.startsWith('//'))
        .slice(0, limit);

      root.dataset.p3xSearchQuery = query;

      if (resultsContainer && index.length > 0) {
        resultsContainer.replaceChildren();
        matches.forEach((entry) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = entry.url;
          link.textContent = entry.title;
          item.append(link);
          resultsContainer.append(item);
        });
      }

      if (emptyState) emptyState.hidden = query.length === 0 || matches.length > 0;
      if (status) {
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.textContent = query.length > 0 ? `${matches.length} resultado(s)` : '';
      }

      input.setAttribute('aria-expanded', String(query.length > 0 && matches.length > 0));
      root.dispatchEvent(
        new CustomEvent<SearchEventDetail>('print3x:search', {
          bubbles: true,
          detail: { query, results: matches, root },
        }),
      );
    };

    input.addEventListener('input', applySearch);
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      applySearch();
    });
    form?.addEventListener('reset', (event) => {
      event.preventDefault();
      input.value = '';
      applySearch();
      input.focus();
    });
    reset?.addEventListener('click', (event) => {
      event.preventDefault();
      input.value = '';
      applySearch();
      input.focus();
    });

    if (index.length > 0) applySearch();
  });
}

function isShareCancelled(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

function setupShare(scope: ParentNode): void {
  elementsInScope<HTMLElement>(scope, '[data-p3x-share]').forEach((root) => {
    if (!markAsReady(root, READY_ATTRIBUTES.share)) return;

    const trigger = root.matches('[data-p3x-share-trigger]')
      ? root
      : root.querySelector<HTMLElement>('[data-p3x-share-trigger]');
    if (!trigger) return;

    const available = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
    root.dataset.p3xShareState = available ? 'available' : 'unavailable';

    if (!available) {
      trigger.hidden = true;
      return;
    }

    trigger.hidden = false;
    const status = root.querySelector<HTMLElement>('[data-p3x-share-status]');

    trigger.addEventListener('click', async (event) => {
      event.preventDefault();

      const urlElement = root.querySelector<HTMLInputElement>('[data-p3x-share-url]');
      const url = root.dataset.p3xShareUrl ?? urlElement?.value ?? window.location.href;
      const text = root.dataset.p3xShareText;

      try {
        await navigator.share({ url, title: document.title, ...(text ? { text } : {}) });
        if (status) status.textContent = root.dataset.p3xShareSuccessText ?? 'Enlace compartido';
      } catch (error) {
        if (!isShareCancelled(error) && status) {
          status.textContent = root.dataset.p3xShareErrorText ?? 'No se pudo compartir';
        }
      }
    });
  });
}

export function initPrint3xUI(scope?: ParentNode): void {
  if (typeof document === 'undefined') return;

  const root = scope ?? document;
  setupSliders(root);
  setupGalleries(root);
  setupDetails(root);
  setupDeferredMedia(root);
  setupSearch(root);
  setupShare(root);
}

if (typeof document !== 'undefined') {
  const boot = () => initPrint3xUI();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}
