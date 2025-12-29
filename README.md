This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

This project follows a Domain-Driven Design (DDD) approach adapted for Next.js:

```
src/
├── actions/        # Server Actions (Application Layer)
├── app/           # Next.js App Router (Entry Points)
├── components/    # Reusable UI Components (Presentation Layer)
├── domain/        # Types and Interfaces (Domain Layer)
└── lib/           # Infrastructure & Utilities (Infrastructure Layer)
```

## Component Architecture

Components follow a strict folder-based architecture to ensure scalability and clarity.

### Rules:
1. **Separation**: Each component resides in its own folder or a category folder.
2. **Naming**: Source files use simple names (e.g., `animated.tsx`, `toggle.tsx`).
3. **Exports**: An `index.ts` file exports the component with a specific prefix based on the folder structure to avoid naming collisions.

### Example Structure:

```
src/components/
├── badge/
│   ├── index.ts        # export { Badge } from './badge';
│   └── badge.tsx
├── card/
│   ├── index.ts        # export { Card } from './card';
│   └── card.tsx
├── contact/
│   └── form/
│       ├── index.ts    # export { Form as ContactForm } from './form';
│       └── form.tsx
├── section/
│   └── animated/
│       ├── index.ts    # export { Animated as SectionAnimated } from './animated';
│       └── animated.tsx
└── theme/
    ├── provider/
    │   ├── index.ts    # export { Provider as ThemeProvider } from './provider';
    │   └── provider.tsx
    └── toggle/
        ├── index.ts    # export { Toggle as ThemeToggle } from './toggle';
        └── toggle.tsx
```

### Usage:
Import components using their prefixed names from the index files:

```tsx
import { SectionAnimated } from "@/components/section/animated";
import { ThemeToggle } from "@/components/theme/toggle";
import { ContactForm } from "@/components/contact/form";
```
