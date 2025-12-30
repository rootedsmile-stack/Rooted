# Herbal Tooth Powder - Ecommerce Store

A premium, single-product direct-to-consumer ecommerce site built with Next.js and deployed on Cloudflare Pages.

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Deployment**: Cloudflare Pages + Pages Functions
- **Runtime**: Cloudflare Workers (edge runtime)
- **Database**: Cloudflare D1 (SQLite at the edge)
- **Styling**: CSS with custom theme system
- **Payments**: To be implemented (Stripe integration planned)

## Project Structure
/app                 # Next.js App Router pages and API routes
/components          # React components
/config              # Theme configuration (single source of truth for colors)
/content             # Product content and data
/lib                 # Utility functions and type definitions
/migrations          # D1 database migration files
/public              # Static assets
/styles              # Global CSS styles

## Theme System

### Visual Color Mapping

This project uses a centralized theme system defined in `/config/theme.json`:
┌─────────────────────────────────────────┐
│  COUPON PANEL (Top Banner)              │
│  Background: Dark green (#2D5016)       │
│  Text: White (#FFFFFF)                  │
│  Accent: Cream (#F4E5D3)                │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  HEADER (Navigation)                    │
│  Background: White (#FFFFFF)            │
│  Text: Dark green (#2D5016)             │
│  Border: Light beige (#E8DCC8)          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│                                         │
│  BODY (Main Content Area)               │
│  Background: Off-white (#FDFBF7)        │
│  Text: Dark gray (#3A3A3A)              │
│  Cards: White (#FFFFFF)                 │
│  Borders: Light beige (#E8DCC8)         │
│                                         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  FOOTER                                 │
│  Background: Dark green (#2D5016)       │
│  Text: Cream (#F4E5D3)                  │
│  Link Hover: White (#FFFFFF)            │
└─────────────────────────────────────────┘
### Editing Colors

1. **All colors** are defined in `/config/theme.json`
2. Colors are automatically mapped to CSS variables in `/styles/globals.css`
3. **Never hard-code colors** in components or other CSS files
4. To change colors, edit `theme.json` only

### Color Categories

- **couponPanel**: Top promotional banner
- **header**: Main navigation area
- **body**: Main content, cards, text
- **footer**: Bottom section
- **primary**: Main brand color (buttons, links)
- **secondary**: Supporting brand color
- **accent**: Decorative colors (sage, cream, terracotta, warm gray)
- **status**: Success, error, warning, info states

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account (free tier works)
- Wrangler CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd herbal-tooth-powder-store

