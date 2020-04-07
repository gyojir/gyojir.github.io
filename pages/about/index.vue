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

<script>
export default {
  layout: 'main',
  head () {
    return {
      title: 'gyojir | ' + this.$route.name
    }
  }
}
</script>