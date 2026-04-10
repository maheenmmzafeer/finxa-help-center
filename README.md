# Finxa Commerce Help Center

A Help Center web application for Finxa Commerce, built with Next.js App Router, providing clear structured step by step guides for core merchant workflows.

## Overview

This project provides practical, step-by-step help articles for core merchant workflows:

- Getting Started
- Products
- Payments
- Storefront
- Orders
- Shipping
- Markets

The app is optimized for mobile and desktop with shared layout components, searchable content and structured metadata for SEO/social sharing.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Routes

- /
- /getting-started
- /products
- /payments
- /storefront
- /orders
- /shipping
- /markets
- Not Found route via src/app/not-found.tsx

## Key Features

- Global black header and footer
- Responsive navigation:
	- Desktop top app bar links
	- Mobile hamburger menu
- Guide page sidebar:
	- Sticky sidebar on desktop
	- Expand/collapse All Guides menu on mobile
- Homepage search with category filtering
- Homepage category cards with featured-first desktop arrangement
- Breadcrumbs on guide pages
- Custom 404 page

## Project Structure

src/

- app/
	- layout.tsx (root layout)
	- page.tsx (homepage)
	- not-found.tsx (404 page)
	- [guide routes]/page.tsx
- components/
	- site-header.tsx
	- site-footer.tsx
	- guide-shell.tsx
	- sidebar.tsx
	- article-card.tsx
	- search-bar.tsx
	- breadcrumb.tsx
- lib/
	- help-center-content.ts (guide/category data source)

## Notes

- All guides use simple, step-by-step instructions.
- Screenshot areas are currently placeholders and will be replaced with real Finxa Commerce screenshots from the platform UI.