// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    routeRules: {
        // Homepage pre-rendered at build time
        "/": {prerender: true},
        // Porfolio page generated on-demand, revalidates in background
        "/portfolio/**": {swr: true},
        // Event loop page renders only on client-side
        "/event-loop/**": {ssr: false},
        // Redirects legacy urls
        "/old-page": {redirect: "/new-page"},
    },
    typescript: {
        strict: true,
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
    experimental: {
        componentIslands: true
    }
});

//Using route rules we can define rules for a group of nuxt routes, change rendering mode or assign a cache strategy based on route
