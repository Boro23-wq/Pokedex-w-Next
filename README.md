## Pokedex w/ Next.js
The application is built to demonstrate client-side rendering, server-side rendering, static site generation, and incremental static regeneration using Next.js.

![Cover]()

## Tools used for this site
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [SWR](https://swr.vercel.app/)
- [Axios](https://www.npmjs.com/package/axios)
- [PokeApi](https://pokeapi.co/docs/v2)
- SCSS/CSS for styles.

## Concept
 **1. Client-side rendering:**
Client-side rendering serves a blank page (loading state) without any content until the Javascript content is fetched, then later rehydrates the application with dynamic content.
 **2. Server-side rendering:**
Server-side rendering pre-renders a page on the server,  includes the data, and delivers a fully populated HTML page with dynamic data to the client.
**3. Static-site generation:**
Static-site generation usually generates the pages during build time. With Incremental-static regeneration, we can statically generate on a per-page basis, without needing to rebuild the entire site.

## Install and getting started

First install the required packages using npm or yarn:

```bash
npm install
# or
yarn
```

After the packages are installed, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

## Environment variables
- Create a `.env.local` file in the root of your project and paste the following environment variables.
```
NEXT_PUBLIC_API_BASE_URL=https://pokeapi.co/api/v2
NEXT_PUBLIC_API_POKI_IMAGE_SPRITE_URL=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
```

## Attribution

This application was inspired by [Ahmad Awais'](https://www.youtube.com/watch?v=eKFZBCFa_jc&t=908s) video on Youtube where he demonstrated a very similar application that helps explain Next.js' data fetching techniques.