<template>
  <div :class="$style.root">
    <h1>about</h1>
    <p>管理人：gyojir</p>
  </div>
</template>

<style lang="scss" module>
.root{
	width: 100%;
}
</style>

<script setup>
const route = useRoute();
definePageMeta({layout: 'main'})
useHead({
  title: route.name
})
</script>