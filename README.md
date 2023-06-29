# Nuxt decommission

This mono repo contains two local applications built with Next.js 13.4 and Nuxt.js. 3 The purpose of this project is to showcase the functionality and highlight the differences between these two frameworks. Provides a high-level overview and does not delve deeply into the frameworks. For more in-depth knowledge and detailed documentation, it is recommended to refer to the respective README files in each application's directory. This repo was made to follow the RFC Nuxt 2 decommission, Vue 2 will reach End of Life (EOL) on December 31st, 2023.

1. [NEXT README](/apps/next-showcase-app/README.md)
2. [NUXT README](/apps/nuxt-showcase-app/README.md)

# Getting Started

Make sure to install the dependencies and start the development server:

```bash
npm install
pnpm next:dev

or

pnpm nuxt:dev
```

# Main Pros and Cons of each framework

## Next.js

### Main pros

- React Server and Client Components
- Simplified Data Fetching (no more getStaticProps or getServerSideProps). Next.js extends the fetch options object to allow each request to set its caching and revalidating.
- Automatic code splitting
- Server Actions and Turbopack
- Edge and Node runtimes
- New next/image, next/font and next/script
- SEO support (new Metadata API): no need to use Head os Script
- Bigger community

### Main cons

- Next.js file-based system routing makes it not very flexible when it comes to routing.
- Many third-party components will have to be wrapped in a component that will tell Next that it’s a client component.
- Wrapping fetch in use is currently not recommended in Client Components (for now, if we need to fetch data they recommend using SWR or React Query).


## Nuxt.js

### Main pros

- Also introduces the client only components
- Vite
- Pre-fetching
- Universal and Hybrid Rendering
- Auto imports and dynamic imports by adding Lazy into the component name
- Nitro - Server Engine
- File-based routing (but it's optional - flexible)
- First-class TypeScript support

### Main cons
- Small community behind it