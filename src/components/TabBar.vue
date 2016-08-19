<template>
  <div class="tabbar">
    <ul class="tabbar-list">
      <li class="tabbar-item">
        <span class="tabbar-item--title">首页</span>
        <i class="tabbar-item--icon icon-tabbar-home"></i>
      </li>
      <li class="tabbar-item">
        <span class="tabbar-item--title">1页</span>
        <i class="tabbar-item--icon icon-tabbar-home"></i>
      </li>
      <li class="tabbar-item">
        <span class="tabbar-item--title">三页</span>
        <i class="tabbar-item--icon icon-tabbar-home"></i>
      </li>
      <li class="tabbar-item">
        <span class="tabbar-item--title">四页</span>
        <i class="tabbar-item--icon icon-tabbar-home"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1 {
  color: #42b983;
}
</style>
