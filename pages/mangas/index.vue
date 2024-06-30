<template>
  <div :class="$style.root">
    <h1>4コマ漫画</h1>
    <p>工事中</p>
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