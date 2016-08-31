<template>
  <div class="home">
    <div class="home-wrap">
      <div class="home-page">
        <a v-link="'/user_info'" class="home-start">开始采集</a>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script type="text/babel">
  import { HOME_TITLE } from '../constants'
  import { updateHeadline } from '../vuex/actions'
  import Tabbar from '../components/Vfooter'
  export default {
    components: {
      Tabbar
    },
    vuex: {
      actions: {
        updateHeadline: updateHeadline
      }
    },
    created () {
      this.updateHeadline(HOME_TITLE)
    }
  }
</script>

<style lang="scss">
@import '../styles/css/variable';
.home-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
  overflow: scroll;
}
.home-page {
  position: relative;
  height: 100%;
  width: 100%;
}
.home-start {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -325px;
  width: 650px;
  height: 100px;
  background-color: $theme-red;
  border-radius: 10px;
  color: #fff;
  font-size: 38px;/*px*/
  text-align: center;
  line-height: 100px;
}
</style>
