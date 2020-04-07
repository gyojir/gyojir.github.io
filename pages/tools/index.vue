<template>
  <div :class="$style.root">
    <h1>tools</h1>
    <dl>
      <dt><a href='https://gyojir.github.io/yonkoma_frame_generator/'>4コマジェネレーター</a></dt>
      <dd>4コマ漫画の枠線画像を作れるよ</dd>
    </dl>
  </div>
</template>

<style lang="scss" module>
.root{
	width: 100%;
}

dt {
  margin-bottom: 0.5rem;
}
</style>

<script>
export default {
  layout: 'main',
  head () {
    return {
      title: this.$route.name
    }
  }
}
</script>