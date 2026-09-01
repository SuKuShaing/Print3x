# Print3x UI contracts

`print3x-ui.ts` is loaded by `SiteLayout.astro`. It is opt-in: without a
matching `data-p3x-*` root, it does nothing. It has no Shopify dependency and
does not make network requests.

## Slider

Root: `[data-p3x-slider]`.

- Slides: `[data-p3x-slide]`; optional active marker `data-p3x-slide-active`.
- Previous/next: `[data-p3x-slider-prev]` and `[data-p3x-slider-next]`.
- Direct navigation: `[data-p3x-slider-to="0"]` using a zero-based index.
- Pause/resume: `[data-p3x-slider-toggle]`.
- Counter/live status: `[data-p3x-slider-status]`.
- Optional root values: `data-p3x-slider-mode="scroll"`,
  `data-p3x-slider-loop="false"`, `data-p3x-slider-keyboard="false"`,
  `data-p3x-slider-autoplay="5000"` in milliseconds and
  `data-p3x-slider-transition="slide"` for a right-to-left entrance and
  leftward exit in slideshow mode.

The default mode shows one slide at a time. Scroll mode keeps slides visible
and scrolls the selected slide into view. Autoplay is opt-in and is disabled
when `prefers-reduced-motion: reduce` is active. The script updates
`aria-hidden`, `aria-current`, `aria-disabled`, `aria-pressed` and the state
attributes it owns. The optional slide transition is skipped for keyboard
navigation and reduced motion.

## Gallery and modal

Root: `[data-p3x-gallery]`.

- Main media: `[data-p3x-gallery-media="media-id"]`.
- Thumbnail: `[data-p3x-gallery-thumb][data-p3x-gallery-target="media-id"]`.
- Optional status: `[data-p3x-gallery-status]`.
- Optional display mode: `data-p3x-gallery-display="stacked"`.
- Optional zoom opener: `[data-p3x-gallery-open]`, optionally with
  `data-p3x-gallery-target="media-id"`.
- Optional full-size source on the image: `data-p3x-gallery-full-src`.

When `[data-p3x-gallery-modal]` exists, it is opened as a native `dialog` when
available. Its close control is `[data-p3x-gallery-close]` and its image area
can be `[data-p3x-gallery-modal-content]`. Escape, backdrop click and the
close control restore focus to the opener. Thumbnail arrow/Home/End keys are
supported.

## Details and accordion

- Standalone detail: `details[data-p3x-details]`.
- Accordion container: `[data-p3x-accordion]` containing `details`.
- Use `data-p3x-accordion="single"` to keep sibling details exclusive.

Native `details` remains the source of truth. The script synchronizes
`aria-expanded`, closes an open item when focus leaves it, and closes the
focused item with Escape while returning focus to its summary.

## Deferred media

Root: `[data-p3x-deferred-media]`.

- User trigger: `[data-p3x-media-trigger]`.
- Approved inert source: `[data-p3x-media-template]` plus
  `data-p3x-media-approved="true"`.
- Optional insertion target: `[data-p3x-media-content]`.
- Optional placeholder: `[data-p3x-media-placeholder]`, or configure
  `data-p3x-media-placeholder-text`.

The template is not inserted until the user activates the trigger. Missing or
unapproved media stays in a pending placeholder state. The script never calls
`play()` and removes `autoplay` from handled videos.

## Local search

Root: `[data-p3x-search]`, local form `[data-p3x-local-form]`, input
`[data-p3x-search-input]`, reset `[data-p3x-search-reset]`, results
`[data-p3x-search-results]`, empty state `[data-p3x-search-empty]` and live
status `[data-p3x-search-status]`.

The local form is a deliberate static-search exception: it is controlled and
never submits to an endpoint. An optional static
JSON index is referenced with `data-p3x-search-index="#search-index"`, where
the referenced element contains entries shaped as `{ "title": "...",
"url": "/path", "text": "..." }`. Matching internal links are rendered
locally. Every input or submit emits a bubbling `print3x:search` event with
`detail.query`, `detail.results` and `detail.root`, which is the extension hook
for a future static index.

## Share

Root: `[data-p3x-share]` and trigger `[data-p3x-share-trigger]`.

The trigger is hidden when `navigator.share` is unavailable. Optional values
are `data-p3x-share-url`, `data-p3x-share-text`,
`data-p3x-share-success-text`, `data-p3x-share-error-text` and
`[data-p3x-share-status]`. No clipboard fallback or external dependency is
used.

`initPrint3xUI(scope?)` is exported for a component that adds a static block
after the initial page load. Calling it again is safe because each feature
marks its initialized root and does not attach duplicate listeners.
