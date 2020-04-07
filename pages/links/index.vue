<template>
  <div :class="$style.root">
    <h1>links</h1>
    <dl>
      <dt><a href='http://team-shinkailab.ml/'>チームシンカイラボ</a></dt>
      <dd>こういう活動もしています</dd>
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