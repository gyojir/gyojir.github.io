<template>
  <div :class="$style.root">
    <h1>contact</h1>
    <p>大きな声で呼んでください</p>
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