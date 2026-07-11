---
name: Oceanic Life Narrative
colors:
  surface: '#0f1418'
  surface-dim: '#0f1418'
  surface-bright: '#353a3e'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#262a2f'
  surface-container-highest: '#31353a'
  on-surface: '#dfe3e8'
  on-surface-variant: '#bec8d2'
  inverse-surface: '#dfe3e8'
  inverse-on-surface: '#2c3135'
  outline: '#88929b'
  outline-variant: '#3f4850'
  surface-tint: '#8cceff'
  primary: '#8cceff'
  on-primary: '#00344e'
  primary-container: '#1399db'
  on-primary-container: '#002d44'
  inverse-primary: '#006492'
  secondary: '#b5c9d7'
  on-secondary: '#20333d'
  secondary-container: '#374955'
  on-secondary-container: '#a4b8c5'
  tertiary: '#ffb86c'
  on-tertiary: '#492900'
  tertiary-container: '#ce7e0a'
  on-tertiary-container: '#402300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#8cceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004b6f'
  secondary-fixed: '#d1e5f3'
  secondary-fixed-dim: '#b5c9d7'
  on-secondary-fixed: '#0a1e28'
  on-secondary-fixed-variant: '#374955'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#ffb86c'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#683d00'
  background: '#0f1418'
  on-background: '#dfe3e8'
  surface-variant: '#31353a'
  ocean-teal: '#00F2EA'
  surface-muted: '#0A2533'
  text-primary: '#FFFFFF'
  text-secondary: '#B0C4CE'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  metric-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system translates the academic rigor of environmental reporting into an immersive, editorial experience focused on **SDG 14: Life Below Water**. The brand personality is **Authoritative, Immersive, and Urgent**, shifting from the terrestrial warmth of the reference project to a deep-sea atmosphere.

The design style is a blend of **Minimalism and High-Contrast Editorial**. It utilizes expansive dark oceanic backgrounds to make high-quality marine photography and bright SDG-specific data "pop." By pairing elegant, traditional serif typography with a rigid, modern functional grid, the system evokes the feeling of a premium scientific journal or a high-end digital exhibition.

**Emotional Response:** 
- **Awe:** Through large-scale imagery of marine ecosystems.
- **Clarity:** Through structured data presentation and generous whitespace.
- **Responsibility:** Through professional, institutional-grade typography and clean layouts.

## Colors

The palette is anchored in the **SDG 14 Blue (#0A97D9)**, representing the clear, sunlit surface of the ocean. This is contrasted against a **Deep Navy (#051923)** background that provides infinite depth and institutional gravity. 

- **Primary Blue:** Used for calls to action, active navigation states, and primary data highlights.
- **Secondary Navy:** The primary canvas color, creating a "Dark Mode" default that reduces eye strain and makes imagery more vibrant.
- **Ocean Teal:** A functional accent color used for secondary data points, success states, or "Strengths" in SWOT analyses.
- **Contrast White:** Reserved for primary body text and headlines to ensure WCAG AA readability against deep backgrounds.

## Typography

This system employs a **dual-typeface strategy** to balance editorial elegance with modern legibility.

1.  **Headlines (Playfair Display):** A sophisticated serif used for all major titles. It conveys the "Scientific Authority" and "Premium Education" aspect of the project. It should be used with tight letter-spacing in larger sizes.
2.  **Body & UI (Plus Jakarta Sans):** A clean, modern sans-serif that ensures high readability for dense educational content and data. Its slightly rounded terminals provide a friendly, approachable contrast to the sharp serif headlines.

**Formatting Rules:**
- Use **Italicized Serif** within headlines (as seen in the reference) to highlight key thematic words (e.g., *Kehidupan* di Bawah Air).
- **Metric Display** style is used for "5 Fakta" sections to give data a high visual impact.
- **Label Caps** are used for breadcrumbs, status indicators (e.g., "SEGERA HADIR"), and overlines.

## Layout & Spacing

The layout follows a **structured 12-column grid** with significant vertical breathing room to allow the "Oceanic" theme to feel vast and immersive.

- **The Split-Hero:** Adopt the 50/50 split layout from the reference for main landing sections—content on the left, symbolic graphics or imagery on the right.
- **Section Gaps:** Use large vertical spacing (120px+) between major narrative shifts to prevent information overload.
- **Responsive Reflow:** On mobile, the 50/50 split collapses into a single column. Horizontal margins decrease from 64px to 20px to maximize reading area.
- **Grid Consistency:** Content blocks, such as "Targets" or "Project Phases," should align strictly to the 12-column grid, spanning 4 columns each (3-up) on desktop.

## Elevation & Depth

To maintain the "Deep Sea" aesthetic, depth is created through **Tonal Layering and Glassmorphism** rather than traditional drop shadows.

- **Tonal Layers:** Surfaces slightly lighter than the base navy (`#0A2533`) are used to define cards and containers. This creates a subtle hierarchy without breaking the dark-mode immersion.
- **Glassmorphism:** Navigation bars and modal overlays use a 20% transparent blur effect (Backdrop Filter: 12px blur) to simulate the refractive quality of water.
- **Ghost Borders:** Elements like "Mulai Proyek" buttons use 1px solid strokes in low-opacity teal or white to define shape without adding visual weight.
- **Atmospheric Glow:** Large, low-opacity radial gradients in SDG 14 Blue may be used in the background to simulate "light rays" filtering through water.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall layout is architectural and structured, subtle rounding on buttons, cards, and input fields prevents the UI from feeling too "sharp" or "hostile," aligning with the educational and conservation-focused nature of the project.

- **Icons:** Should be contained within circular or soft-square frames.
- **SDG 14 Icon:** Always remains a sharp-cornered square per UN branding guidelines, but can sit atop a softly rounded container.
- **Dividers:** Use the triple-asterisk (`* * *`) motif for section breaks, maintaining the editorial charm of the reference site.

## Components

### Buttons
- **Primary:** Solid SDG 14 Blue with White text. Bold weight. Rectangular with 4px radius.
- **Secondary (Ghost):** 1px stroke of SDG 14 Blue or White. Text color matches stroke. No fill.
- **Navigation Links:** All-caps Jakarta Sans. Hover state shows a 2px underline in Primary Blue.

### Cards (Targets & Phases)
- **Base:** Surface-muted background (`#0A2533`) with a 1px border (`#FFFFFF10`).
- **Internal Padding:** 32px (2rem) to maintain the "Generous Whitespace" requirement.
- **Status Badges:** Small, all-caps labels (e.g., "SEGERA HADIR") with high letter spacing, positioned at the top right of the card.

### Navigation
- **Top Bar:** Fixed position with a subtle glassmorphic blur. Indonesian labels: *Beranda, 17 SDGs, Empati, Ide, Prototipe, Pengujian, Refleksi*.
- **Active State:** A small primary blue dot or underline beneath the current section label.

### Data & Lists
- **SWOT Blocks:** Use "Ocean Teal" for Strengths and a "Warning Coral" (#FF6B6B) for Threats to provide immediate visual categorization.
- **Fact Numbers:** Use the `metric-display` typography style. Numbers should be at least 3x the size of the accompanying label.

### Iconography
- Use the official SDG 14 icon for the main header.
- UI icons should be thin-line (2pt stroke) and themed around marine biology where applicable (e.g., a "waves" icon for progress, "anchor" for fixed sections).