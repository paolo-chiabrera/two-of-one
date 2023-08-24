<template>
  <div>
    <AppHeader/>
    <section class="content">
      <slot/>
      <AppFooter/>
    </section>
  </div>
</template>
<style>
@import '@/assets/styles/app.css';
</style>