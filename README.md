# FastSite Customer Website Showcase

This repository showcases customer websites built by FastSite. The project uses Next.js to create a showcase where multiple customer websites are hosted under different subpaths of the main domain.

## Structure

The repository is organized as follows:

- Main domain: `https://fastsite-customer-websites.vercel.app/`
  - Shows a directory of all customer websites
- Customer-specific websites:
  - KL Green Garden: `https://fastsite-customer-websites.vercel.app/kl-green-garden`
  - Beautiful Garden Landscape: `https://fastsite-customer-websites.vercel.app/beautiful-garden-landscape`

## How to Add a New Customer Website

To add a new customer website to the showcase:

1. Create a new directory in `app/(customers)/` with the customer name in kebab-case

   ```bash
   mkdir -p app/\(customers\)/new-customer-name
   ```

2. Create a `page.tsx` file in the new directory with the customer's website content

   ```bash
   touch app/\(customers\)/new-customer-name/page.tsx
   ```

3. Add the new customer website to the list in `app/page.tsx`

4. Deploy the changes to Vercel

## Development

To run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is deployed on Vercel at [https://fastsite-customer-websites.vercel.app/](https://fastsite-customer-websites.vercel.app/).
