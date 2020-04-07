<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <h1>gyojirの</h1>
    </div>

    <h2>ようこそ！</h2>
    <p>4コマ漫画とかあるから見てってちょ</p>

    <br>
    
    <dl :class="$style.main_dl">
      <dt><a href='https://gyojir.com/mangas'>4コマ漫画</a></dt>
      <dd>4コマ漫画を描いているよ</dd>
      <dt><nuxt-link to='/tools'>tools</nuxt-link></dt>
      <dd>何かツール</dd>
    </dl>    
    
    <br>

    <dl :class="$style.sub_dl">
      <dt><a href='http://blog.gyojir.com'>blog</a></dt>
      <dt><nuxt-link to='/links'>links</nuxt-link></dt>
      <dt><nuxt-link to='/about'>about</nuxt-link></dt>
      <dt><nuxt-link to='/contact'>contact</nuxt-link></dt>
      <dt><a href='https://twitter.com/gyojir_'>twitter</a></dt>
    </dl>

  </div>
</template>

<style lang="scss" module scoped>
.main_dl {
  dt, dd {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.5rem;
  }
}
.sub_dl {
  dt, dd {
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 1.2rem;
  }
}
ul {
  list-style: none;
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.5rem;
  }
}

.root{
	width: 100%;
}

.title{
	text-align: center;
}
</style>

<script>
export default {
  layout: 'main',
  head: {
    title: 'gyojir'
  }
}
</script>