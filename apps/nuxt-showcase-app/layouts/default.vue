<template>
  <div>
    <nav class="nav">
      <ul>
        <li>
          <strong>Nuxt js</strong>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink href="/">Home Page</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/portfolio">Portfolio</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
<styles scoped lang="css">
.nav {
  margin: 0 20px;
}
</styles>
