# Medical Research Guide - AI Developer Instructions

This document provides instructions for an AI agent to understand, build, and modify this medical research guide website.

## Project Overview
- **Type**: React Single Page Application (SPA)
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Language**: Primary content is Arabic (RTL), with mixed English technical terms.
- **Key Features**: Interactive Biostatistics Map, Sample Size Calculator, Multi-language Search, Responsive Layout.

## Technical Stack
- **Frontend**: React 18
- **Icons**: Lucide React
- **Animations**: Framer Motion (or custom CSS transitions)
- **Build Tool**: Vite
- **Package Manager**: pnpm (recommended) or npm/yarn

## Directory Structure
- `/client/src/components`: Reusable UI components (Accordions, Badges, SearchBar, etc.)
- `/client/src/pages`: Main content sections (Home, AdditionalSections, MissingSections, AdvancedSections).
- `/client/public`: Static assets (Images, icons).
- `/client/src/index.css`: Global styles, including critical RTL/LTR mixed text alignment fixes.

## Build & Run Instructions
1. **Install Dependencies**: `pnpm install`
2. **Development Mode**: `pnpm dev`
3. **Build for Production**: `pnpm build`

## Important Implementation Notes (For AI)
1. **Mixed Text Alignment**: The project uses specific CSS rules in `index.css` and Tailwind classes (`inline-block`, `align-middle`) to ensure English terms/badges inside Arabic paragraphs don't break the baseline or text wrapping.
2. **Search Logic**: The search functionality is bilingual. Keywords are stored in `SearchBar.tsx` and `SearchBox.tsx`. When adding new sections, update both the `searchData` array and the `contentMap`.
3. **RTL Support**: The entire site is wrapped in `dir="rtl"`. Ensure any new components respect this direction.
4. **Tooltips**: The "Interactive Statistical Map" title has a click-triggered tooltip with "click-outside to close" logic.
5. **Layout Symmetry**: The "Statistical Analysis Software" section uses Flexbox to ensure orphaned cards in the last row are centered.

## Current State
- The site is fully functional and optimized for mobile/desktop.
- Typography has been cleaned (decorative quotes removed from rendered text).
- Vertical alignment issues for mixed Arabic/English text have been fixed globally.

Please maintain these standards when performing further modifications.
