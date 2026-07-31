# Print3x styles

The styles in this directory are an Astro adaptation of the reusable visual
system from Shopify Refresh 9.0.0. Active values come from
`zip_theme_shopify_estable/config/settings_data.json`; Liquid variables are
resolved in `tokens.css`.

Futura is configured as the body and heading family, but no local Futura font
file was delivered in `public/fonts` or the source theme assets. The CSS keeps
the family name and uses browser fallbacks. It does not invent a font asset or
add a remote font request.

`base.css` contains the reset, semantic color schemes, layout primitives,
typography, responsive grid, media, buttons, fields, focus states and rich
text rules. `components/` contains reusable Refresh modules for cards, banners,
image-with-text, sliders, slideshow, accordion, deferred media and modals.

Styles and dependencies for commerce, customer accounts, payment, pickup, quick
add, Loox, app embeds and the Shopify editor are not ported. Header and footer
styles are intentionally kept in their own migration modules.
