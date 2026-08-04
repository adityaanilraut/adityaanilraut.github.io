---
name: Warm Professionalism
colors:
  surface: '#161311'
  surface-dim: '#161311'
  surface-bright: '#3c3836'
  surface-container-lowest: '#100e0c'
  surface-container-low: '#1e1b19'
  surface-container: '#221f1d'
  surface-container-high: '#2d2927'
  surface-container-highest: '#383432'
  on-surface: '#e9e1dd'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e9e1dd'
  inverse-on-surface: '#33302d'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#ffb77d'
  on-secondary: '#4d2600'
  secondary-container: '#d97707'
  on-secondary-container: '#432100'
  tertiary: '#8fd5ff'
  on-tertiary: '#00344a'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#161311'
  on-background: '#e9e1dd'
  surface-variant: '#383432'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system facilitates a sophisticated, high-performance environment for software development and technical workflows. The brand personality is authoritative yet approachable, moving away from the "cold matrix" aesthetic toward a warm, studio-like atmosphere. 

The design style is **Corporate / Modern** with a focus on **Tonal Layers**. It prioritizes clarity and focus, using deep, warm-undertone charcoals to reduce eye strain during long sessions. The emotional response is one of reliability and "calm power," evoking the feeling of a high-end physical workspace where every tool has its place.

## Colors

The palette is anchored by a deep charcoal base with significant warm (brown/stone) undertones, replacing traditional blue-scale slates. 

- **Primary:** A vibrant Amber (#F59E0B) serves as the high-energy accent for calls to action and critical status indicators.
- **Secondary:** A deeper Terracotta/Burnt Orange (#D97706) provides depth for hover states and secondary highlights.
- **Neutral/Surface:** The background is a "Stone 950" (#1C1917), while UI containers use "Stone 800" (#292524) to create a warm, layered hierarchy.
- **Semantic:** Success and error states should lean toward warm-leaning variations (e.g., a "sap green" and a "blood orange") to maintain the cohesive warmth of the system.

## Typography

The typography system is engineered for technical clarity. **Hanken Grotesk** provides a sharp, contemporary feel for headings. **Geist** handles body copy with its high-legibility, developer-centric proportions. **JetBrains Mono** is reserved for labels, metadata, and code snippets, reinforcing the professional "SDE" aesthetic.

Use high contrast for text: Primary headlines should be near-white (Stone 50), while secondary labels use a warm gray (Stone 400).

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. 

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (32px) to provide "breathing room" for dense data.
- **Mobile:** 4-column grid with 16px margins. 
- **Symmetry:** Maintain consistent internal padding within containers. All spacing increments must be multiples of 4px to ensure a structured, systematic appearance.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** rather than heavy shadows. In this dark theme, higher elevation is represented by lighter, warmer surface colors.

- **Level 0 (Background):** #1C1917 (Deepest Stone).
- **Level 1 (Cards/Sidebar):** #292524 (Warm Charcoal).
- **Level 2 (Popovers/Modals):** #44403C (Mid Stone).

Low-contrast outlines (1px solid Stone 700) should be used on all containers to maintain definition against the dark background. Subtle, amber-tinted ambient shadows (0.1 opacity) may be used for floating modals to emphasize their "warmth" and presence.

## Shapes

The design system uses a **Soft** shape language. This creates a professional, "tooled" look that feels more modern and less aggressive than sharp corners, while remaining more serious than fully rounded systems.

- **Standard Elements:** 0.25rem (4px) corner radius for buttons and input fields.
- **Large Elements:** 0.75rem (12px) for cards and modals.
- **Interactive States:** Use subtle inner-borders on focus to highlight the shape without breaking the silhouette.

## Components

- **Buttons:** Primary buttons use the Amber (#F59E0B) background with black text for maximum contrast. Secondary buttons use a Stone 700 outline with Amber text.
- **Input Fields:** Use a Stone 800 background with a Stone 700 border. On focus, the border transitions to Amber with a subtle 2px glow.
- **Chips:** Small, Stone 700 backgrounds with uppercase JetBrains Mono labels. Used for tags, languages, or status.
- **Lists:** High-density rows with a 1px Stone 800 divider. Hover states should use a subtle Stone 800 background shift.
- **Cards:** No shadows; use tonal stepping (Level 1 surface) and a Stone 700 border.
- **Data Grids:** Essential for the SDE feel. Use thin borders, mono fonts for numeric data, and the primary Amber for selected rows or active states.