# Product Requirements Document
**DigiTools — Digital Tools Buying Platform**

- **Version:** 1.0  
- **Date:** August 20, 2026  
- **Status:** Draft for Review  
- **Prepared based on:** `AI_driven_Project.pdf` & `DigiTools` Figma design file  

---

## 1. Document Overview
This Product Requirements Document (PRD) defines the functional, technical, and design requirements for **DigiTools**, a single-page web application through which users can browse, evaluate, and purchase digital tools and templates. Requirements are consolidated from the provided project brief and the DigiTools Figma design file.

### 1.1 Purpose
To provide the development team with a single source of truth describing what the DigiTools platform must do, how it should behave, and the standard it must be built and tested against before release.

### 1.2 Product Summary
- **Project Title:** Digital Tools Buying Platform ("DigiTools")
- **Product Type:** Responsive single-page e-commerce style web application (catalog + cart)
- **Primary Users:** Freelancers, students, and professionals looking to purchase digital productivity tools/templates
- **Design Source:** `DigiTools.fig` (Figma)
- **Data Source:** Static local JSON (no backend/API in this phase)

---

## 2. Goals & Objectives
- Present a catalog of digital tools/templates in a clear, browsable card layout.
- Allow users to add products to a cart and review them before checkout, without requiring authentication or payment integration.
- Provide instant, non-blocking feedback (via toast notifications) for all cart actions.
- Deliver a fully responsive experience matching the Figma design across mobile, tablet, and desktop.
- Keep the front end self-contained (JSON-driven), enabling this phase to be built and demoed without a backend.

### 2.1 Success Metrics
| Metric | Target |
| :--- | :--- |
| **Design fidelity vs Figma** | Pixel-level match for layout, spacing, color, and type on all breakpoints |
| **Cart accuracy** | Cart count, line items, and total always reconcile with 0 discrepancies |
| **Responsiveness** | No horizontal scroll or broken layout from 320px to 1920px viewport widths |
| **Feedback latency** | Toast notification fires within 100ms of add/remove/checkout action |

---

## 3. Scope

### 3.1 In Scope
- Static marketing sections: Navbar, Banner, Stats, Steps, Pricing, Footer
- Product catalog rendered from a local JSON data file (6–10 products)
- Client-side cart: add, remove, item count, running total, checkout (clear cart)
- Toggle between Product view and Cart view within the main section
- Toast notifications for add to cart, remove from cart, and checkout
- Fully responsive layout across mobile, tablet, and desktop breakpoints

### 3.2 Out of Scope (this phase)
- User authentication / accounts
- Real payment gateway integration
- Backend / database / persistent storage (cart resets on page refresh)
- Order history, invoicing, or email confirmations
- Admin panel for managing products

---

## 4. Technology Stack
| Layer | Technology |
| :--- | :--- |
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS + DaisyUI |
| **Language** | JavaScript (ES6+) |
| **Notifications** | React-Toastify (npm package) |
| **Icons** | Lucide React |
| **Data** | Local JSON file (product catalog) |

---

## 5. Page Structure (Top to Bottom)
1. **Navbar** — sticky, with logo, links, cart icon and live item count badge
2. **Banner (Hero)** — heading, description, hero graphic, CTA buttons
3. **Stats Section** — key platform numbers on a solid brand-color (violet/purple) band
4. **Main Section** — Product / Cart toggle, defaulting to Product view
5. **Steps Section** — "How it works" walkthrough (3 steps)
6. **Pricing Section** — plan/pricing comparison cards with highlighted Pro plan
7. **Closing CTA band** — secondary call to action band
8. **Footer** — links, branding, social, legal

> **Design Note:** Violet/purple primary brand color (`#7C3AED` / `#6D28D9` / `#8B5CF6`) on a clean light-grey/white background, with a dark near-black footer band (`#0F172A`).

---

## 6. Functional Requirements

### 6.1 Navbar
- **NAV-1:** Navbar layout, logo, and menu items follow design styling.
- **NAV-2:** Display shopping cart icon on the right side of navbar.
- **NAV-3:** Cart icon shows a numeric badge equal to current items in cart; badge shows 0 or adjusts when empty.
- **NAV-4:** Cart icon count updates in real time whenever a product is added or removed.

### 6.2 Banner (Hero Section)
- **BAN-1:** Primary heading & supporting description text.
- **BAN-2:** Positioned hero image/illustration with floating badges.
- **BAN-3:** Primary (filled) & secondary (outline) CTA buttons.
- **BAN-4:** Reflows cleanly on smaller breakpoints.

### 6.3 Stats Section
- **STA-1:** Stats band with figures, labels, and column count (e.g. 50K+ Active Users, 1,200+ Digital Tools, 4.9/5 Rating, 99.9% Uptime).
- **STA-2:** Uses solid brand-color (violet/purple) background.
- **STA-3:** Stacks on mobile, row on desktop.

### 6.4 Main Section & View Toggle
- **MAIN-1:** Two toggle buttons — "Products" and "Cart" — centered at the top of the main section.
- **MAIN-2:** Clicking "Products" shows Product Cards grid and hides Cart view.
- **MAIN-3:** Clicking "Cart" shows Cart view and hides Product Cards grid.
- **MAIN-4:** Products view shown by default on initial page load.
- **MAIN-5:** Active toggle button is visually distinguished (filled brand color vs outline/ghost).

### 6.5 Product Data Model (JSON)
Product catalog contains 8-10 items with fields:
- `id`: unique identifier
- `name`: product name
- `description`: short description
- `price`: numeric price ($)
- `period`: "one-time" | "monthly" | "yearly"
- `tag`: "Popular" | "New" | "Best Seller" | "Featured"
- `tagType`: "popular" | "new" | "bestseller" | "featured"
- `features`: array of strings
- `icon`: icon name / identifier

### 6.6 Product Cards
- **CARD-1:** Responsive 3-column grid on desktop, 2 on tablet, 1 on mobile.
- **CARD-2:** Displays name, description, price, period, tag badge, features list, icon, and "Buy Now" button.
- **CARD-3:** Tag badge colored by type (popular: violet/amber, new: emerald, bestseller: rose/purple).
- **CARD-4:** Clicking "Buy Now" adds product to cart and triggers success toast.
- **CARD-5:** If product in cart, state reflected on card (e.g. "Added to Cart" with checkmark & disabled or indicator).
- **CARD-6:** Responsive reflow (3 col desktop, 2 col tablet, 1 col mobile).

### 6.7 Cart Functionality
- **CART-1:** Single-column layout listing all added products.
- **CART-2:** Each line item displays name, icon, tag, price, and Remove button.
- **CART-3:** Displays running total price of items.
- **CART-4:** Navbar cart icon badge always matches item count.
- **CART-5:** Clicking Remove deletes item, updates total and count, triggers warning/info toast.
- **CART-6:** Empty cart displays clear empty-state message with call to browse.
- **CART-7:** "Proceed to Checkout" button displayed when cart has ≥1 item.
- **CART-8:** Clicking "Proceed to Checkout" clears cart, resets total/count to 0, shows checkout success toast.

### 6.8 Steps Section ("How It Works")
- **STEP-1:** 3-step walkthrough: 1. Discover Tools, 2. Instant Checkout, 3. Download & Accelerate.
- **STEP-2:** Desktop row layout, mobile vertical stack.

### 6.9 Pricing Section
- **PRC-1:** Pricing comparison cards (Starter, Professional, Enterprise) with feature lists.
- **PRC-2:** Highlighted recommended plan (Pro plan with badge, violet glow/border).
- **PRC-3:** Presentational tier cards.

### 6.10 Closing CTA & Footer
- **CTA-1:** High-impact call-to-action banner with quick access button.
- **FOOT-1:** Dark near-black background, branding, categorized links, newsletter, copyright.
- **FOOT-2:** Placeholder links rendered cleanly.

---

## 7. Notifications (React-Toastify)
- **Add to cart (Buy Now):** Success toast — `"Added to cart: [Product Name]"`
- **Remove from cart:** Info / Warning toast — `"Removed [Product Name] from cart"`
- **Proceed to checkout:** Success toast — `"Checkout complete — cart cleared!"`
- Toast styling: Top-right, auto-dismiss 2.5s, branded styling.

---

## 8. Definition of Done
- All sections implemented and styled with high aesthetic quality.
- Full product catalog JSON with all required fields.
- Complete cart state management and React-Toastify integration.
- Responsive across mobile, tablet, and desktop.
