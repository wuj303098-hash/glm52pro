# Responsive Advertising Integration

## Goal

Replace every placeholder AdSense unit with the two supplied High Performance Format ads while preserving the existing page layouts and static Next.js export.

## Behavior

- Reuse the shared `AdUnit` component so every existing placement changes consistently.
- Show the 300x250 creative when the viewport is at least 768 pixels wide.
- Show the 320x50 creative below 768 pixels.
- Load only the creative selected for the current viewport.
- Re-evaluate the selected creative when the viewport crosses the breakpoint.

## Implementation

`AdUnit` remains a client component. It selects an ad configuration with `matchMedia` and renders the supplied inline configuration and remote invocation script inside an isolated `iframe` using `srcDoc`. The iframe prevents the two scripts from sharing or overwriting the global `atOptions` value and contains any document-writing behavior from the advertising script.

The existing `slot` prop remains accepted for compatibility with all current pages, but it no longer controls the creative. The invalid placeholder AdSense loader is removed from the root layout.

## Layout And Accessibility

Each unit keeps the existing centered vertical spacing. The iframe has the exact creative dimensions, no border, a descriptive title, and a reserved minimum height so content does not jump after hydration.

## Validation

- Add focused tests for both ad keys, dimensions, breakpoint selection, and removal of the placeholder AdSense publisher ID.
- Run lint and the production static build.
- Inspect generated HTML/assets for the supplied keys and confirm placeholder AdSense code is absent.
- Deploy to Vercel production and verify the public pages return successfully with the new ad code.
