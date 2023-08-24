<template>
    <StoreList :q="queryParams"/>
</template>

<script setup lang="ts">
import { withQuery } from 'ufo'
const queryParams = withQuery('',useRoute().query)
</script>