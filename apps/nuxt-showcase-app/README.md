
# Basic Nuxt 3 application!

This is a very simple application built with **Nuxt 3**, aimed to do a performance test

## Setup

Make sure to install the dependencies and start the development server:

```bash
pnpm install
pnpm dev

```

### [Auto imports](https://nuxt.com/docs/guide/concepts/auto-imports)

Nuxt auto-imports functions and composables to perform data fetching, get access to the app context and runtime config, manage state or define components and plugins.

Auto-imports files created in defined directories:

- components/ for Vue components.
- composables/ for Vue composables.
- utils/ for helper functions and other utilities.

(it's possible to disable them)

Vue 3 exposes Reactivity APIs like ref or computed, as well as lifecycle hooks and helpers that are auto-imported by Nuxt.

> e.g. useHead or useFetch are used without imports

### [Routing](https://nuxt.com/docs/guide/concepts/vuejs-development#vue-router)

Nuxt uses a pages/ directory and naming conventions to directly create routes mapped to your files using the official Vue Router library.

However, since it uses vue-router under the hood, **Nuxt offers you several ways to add custom routes in your project**.

> e.g. Portfolio an event-loop routes were created following the pages structure

### [Rendering modes](https://nuxt.com/docs/guide/concepts/rendering)

Nuxt supports different rendering modes, universal rendering, client-side rendering but also offers hybrid-rendering and the possibility to render your application on CDN Edge Servers. Edge side rendering with Nuxt is only available on Cloudflare Pages, Lagon, Vercel Edge and Netlify Edge.

Hybrid rendering allows different caching rules per route using Route Rules and decides how the server should respond to a new request on a given URL. Note that Hybrid Rendering can be used when using Edge-Side Rendering with route rules.

Edge-side rendering is possible thanks to Nitro, the server engine that powers Nuxt 3. It offers cross-platform support for Node.js, Deno, Cloudflare Workers, and more.

Nitro also auto-generates types for API routes. Plus, Nuxt also generates types for globally available components and auto-imports from your composables, plus other core functionality.

> e.g. In the nuxt config we defined different rendering modes per route

### [Modules](https://nuxt.com/docs/guide/concepts/modules)

Adding Nuxt modules is possible using nuxt.config.

Nuxt modules are now build-time-only, and the buildModules property used in Nuxt 2 is deprecated in favor of modules.

### [Typescript](https://nuxt.com/docs/guide/concepts/typescript#auto-generated-types)

By default, Nuxt doesn't check types when you run nuxi dev or nuxi build, for performance reasons.

Nuxt generates the following files for IDE type support (and type checking): .nuxt/nuxt.d.ts and .nuxt/tsconfig.json

> e.g. In the nuxt config its defined strict typescript mode

### [Nuxt, App and Nitro hooks](https://nuxt.com/docs/guide/going-further/hooks)

1. defineNuxtConfig
2. defineNuxtModule
3. defineNuxtPlugin
4. defineNitroPlugin

### [Nuxt App](https://nuxt.com/docs/guide/going-further/nuxt-app)

you can access runtime app context within composables, components and plugins. (useNuxtApp()) In Nuxt 2 this was the Nuxt content

## Nuxt Dev Tools

Nuxt Dev Tools is enabled in this applications, after starting the dev server check it out

## Blocking the Event Loop

The blockEventLoop function initializes an empty object called largeObject.
It enters a loop that iterates 10e6 (10 million) times.

Inside the loop, it adds properties to the largeObject object using template literals. The properties are named property0, property1, property2, and so on, with corresponding values being the current iteration index.
After the loop completes, the JSON.stringify() method is used to convert the largeObject into a JSON string.
The JSON.parse() method is then used to parse the JSON string back into an object, resulting in the parsedObject.

Finally, the code logs the message "Blocking complete" to the console.
The purpose of this code appears to be to demonstrate how a large object can block the event loop, which is the main thread of execution in JavaScript. By performing a heavy computation, such as adding a large number of properties to an object and converting it to a JSON string, the event loop is occupied and cannot proceed with other tasks until the blocking operation is complete.

During the execution of the blockEventLoop function, the event loop will be occupied with the computations, and it won't be able to process any other events or callbacks. This can result in a frozen or unresponsive state for our app until the loop finishes executing. This route was done for performance testing.
