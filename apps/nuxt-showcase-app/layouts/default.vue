<template>
  <div>
    <AppHeader/>
    <section class="content">
      <slot/>
      <AppFooter/>
    </section>
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/app.css';
</style>