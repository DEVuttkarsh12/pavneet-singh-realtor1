# Pavneet Singh Realty

Premium multi-page real estate website for Pavneet Singh, serving buyers,
sellers, investors, and commercial clients across Nova Scotia.

## Included pages

- Homepage
- Property marketplace
- About Pavneet
- Advisory services
- Buying guide
- Selling guide
- Contact

The property marketplace is intentionally ready for future CRM-fed listings.
Its current empty state can be replaced with manual listing data or a CRM API
when that integration is available.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev:vercel
```

Then open `http://localhost:3000`.

## Deploy on Vercel

1. Extract this project and push the folder to a GitHub repository.
2. In Vercel, choose **Add New > Project** and import that repository.
3. Keep the detected framework as **Next.js**.
4. Leave the root directory as `./`.
5. Deploy. The included `vercel.json` automatically runs the Vercel-specific
   production build.

No environment variables are required for the current website.

## Production check

```bash
npm run build:vercel
```

All images and the optimized Halifax drone hero video are stored inside
`public/`, so they deploy with the website.
