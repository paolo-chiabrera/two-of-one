<template>
  <div>
    <h1>Welcome to <span class="title">Nuxt js!</span></h1>
    <div class="description">
      In this showcase application you will see the Nuxt.js 3 js features using
      random user generator api to display a portfolio
    </div>
    <article>
      <p>Essentials</p>
      <ul>
        <li>
          <small>
            <strong>Routing:</strong> define routes based on the structure of
            your pages/ directory (optional). This can make it easier to
            organize your application and avoid the need for manual route
            configuration.
          </small>
        </li>
        <li>
          <small>
            <strong>Server engine:</strong> The Nuxt server engine Nitro unlocks
            new full-stack capabilities.
          </small>
        </li>
        <li>
          <small>
            <strong>Server-side rendering out of the box:</strong> Nuxt comes
            with built-in SSR capabilities, so you don't have to set up a
            separate server yourself.
          </small>
        </li>
        <li>
          <small>
            <strong>Auto-imports:</strong> write Vue composables and components
            in their respective directories and use them without having to
            import them with the benefits of tree-shaking and optimized JS
            bundles.
          </small>
        </li>
        <li>
          <small>
            <strong>Data-fetching utilities:</strong> Nuxt provides composables
            to handle SSR-compatible data fetching as well as different
            strategies.
          </small>
        </li>
        <li>
          <small>
            <strong>Zero-config TypeScript support:</strong> write type-safe
            code without having to learn TypeScript with our auto-generated
            types and tsconfig.json
          </small>
        </li>
        <li>
          <small>
            <strong>Configured build tools:</strong> uses Vite by default to
            support hot module replacement (HMR) in development and bundling
            your code for production with best-practices baked-in.
          </small>
        </li>
      </ul>
    </article>
  </div>
</template>
<style scoped lang="css">
.description {
  margin-bottom: 50px;
}
.title {
  color: var(--primary);
}
</style>
