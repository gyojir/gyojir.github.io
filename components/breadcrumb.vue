<template>
  <ul :class="$style.list">
    <span>&nbsp;</span>
    <li :class="$style.item" v-for='(crumb, i) in path_array' :key="i">
      <span v-if="crumb.path !== $nuxt.$route.path"><nuxt-link :to="crumb.path" >{{ crumb.name }}</nuxt-link></span>
      <span v-else>{{ crumb.name.replace(/\//g,"") }}</span>
    </li>
  </ul>
</template>
  
<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  computed: {
    path_array () {
      if(this.path === "/"){
        return [];
      }
      const arr = this.path.split(/\/(?!$)/);
      return arr.map((e,i)=>({name: e || "Home", path: arr.slice(0,i+1).join("/") || "/"}));
    }
  }
}
</script>

<style module>
.list {
  list-style: none;
  text-align: left;
  padding: 0;
}
.item {
  display: inline-block;
}
.item::after {
  content: '\00A0›\00A0';
  display: inline-block;
}
.item:last-child::after {
  content: none;
}
</style>