# Medical Research Guide Website - AI Developer Instructions

This project is a comprehensive medical research guide for students. It is built using a modern React stack.

## Technical Stack
- **Frontend**: React (Vite) + TypeScript + Tailwind CSS.
- **UI Components**: Lucide React (icons), Framer Motion (animations).
- **Styling**: Tailwind CSS with custom theme colors (Primary: `#0F3A7D`).
- **Language**: Arabic (RTL support enabled).

## Project Structure
- `/client/src/components`: Reusable UI components (Pyramid, Calculator, Navbar, etc.).
- `/client/src/pages`: Main content sections (Home, AdditionalSections, AdvancedSections, MissingSections).
- `/client/src/hooks`: Custom React hooks (e.g., `useMobile`).
- `/public`: Static assets including images.

## Key Components & Recent Logic Fixes
1. **Hero Section (`Home.tsx`)**: Features a centered decorative divider line (`bg-blue-400`).
2. **Evidence Pyramid (`EvidencePyramid.tsx`)**: Interactive SVG pyramid. Features enhanced interactivity with `onMouseEnter`/`onMouseLeave` for tooltips on desktop and `onClick` for pinning information on mobile/tablets. It ensures `pointer-events: auto` and `z-index` management for tooltip visibility.
3. **Sample Size Calculator (`SampleSizeCalculator.tsx`)**: Uses Cochran and FPC formulas. Tooltips are triggered by **Click** (not hover) with a click-outside-to-close mechanism.
4. **PICO Section (`AdditionalSections.tsx`)**: Expanded acronyms (Population, Intervention, Comparison, Outcome).

## How to Run
1. Install dependencies: `pnpm install`
2. Start development server: `pnpm dev`
3. Build for production: `pnpm build`

## Instructions for AI Agents
- Maintain the **RTL (Right-to-Left)** layout.
- Ensure all new text follows the professional medical tone.
- When modifying interactive components, preserve the existing state cleanup logic to avoid race conditions.
- The primary brand color is `#0F3A7D`, use it for consistency.
