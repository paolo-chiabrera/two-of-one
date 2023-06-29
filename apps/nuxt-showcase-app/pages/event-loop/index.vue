<script setup lang="ts">
import blockEventLoop from '../../blockEventLoop'
const router = useRouter();
function handleClick() {
  blockEventLoop();
  router.push("/");
}
</script>
<template>
  <div>
    <h1>Performance test</h1>
    <button @click="handleClick">Block Event Loop</button>
  </div>
</template>
