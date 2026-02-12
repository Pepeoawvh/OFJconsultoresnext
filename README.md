This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

### Tailwind CSS ✅
This project is preconfigured to use Tailwind CSS. No `npx tailwindcss init` step is necessary.

- `src/app/globals.css` already includes the Tailwind directives `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;`.
- `postcss.config.mjs` is configured with `tailwindcss` and `autoprefixer`.
- `tailwind.config.cjs` is present and includes the `src/app` and `src/components` paths so Tailwind scans your files.

Just run the dev server and Tailwind will be applied automatically:

```bash
npm run dev
```

### Variables de entorno
Create a `.env.local` file in the project root with your Resend credentials (do not commit this file):

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=no-reply@ofuentes.cl
RESEND_TO_EMAIL=ofuentes@ofuentes.cl
```

A `.env.example` file is included as reference.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
