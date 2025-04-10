# FastSite Customer Website Showcase

This repository showcases customer websites built by FastSite. The project uses Next.js to create individual customer websites hosted under different subpaths of the main domain.

## Structure

The repository is organized as follows:

- Main domain: `https://fastsite-customer-websites.vercel.app/`
  - Redirects to `https://fastsite.my`
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

3. Make sure to include a back link to FastSite's main site:
   ```jsx
   <Link href="https://fastsite.my" className="text-blue-600 hover:underline">
     ← Back to FastSite
   </Link>
   ```

## Development

To run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/kl-green-garden](http://localhost:3000/kl-green-garden) with your browser to see the result.

## Deployment

This project is deployed on Vercel at [https://fastsite-customer-websites.vercel.app/](https://fastsite-customer-websites.vercel.app/).
