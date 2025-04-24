# Modern Web Design Agency

A high-performance website with modern animations, clean design, and exceptional user experience for startups and established businesses.

## Development Setup

Before running the development server or deploying, you need to approve the build script for the `sharp` package:

```bash
pnpm approve-builds
```

When prompted, select `sharp` from the list and confirm.

## Running the Development Server

```bash
pnpm install
pnpm dev
```

## Building for Production

```bash
pnpm build
```

## Deployment

This project is configured for deployment on Vercel. Make sure to run `pnpm approve-builds` and select `sharp` before deploying to avoid build errors. 