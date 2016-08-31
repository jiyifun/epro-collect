<!-- 列表页 -->
<template>
  <div class="histroy">
    <div class="histroy-wrap">
      <div class="histroy-page">
          <p class="not">采集历史页</p>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/babel">
import { HISTROY_TITLE } from '../constants'
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
export default {
  components: {
    Tabbar
  },
  vuex: {
    getters: {
      items: contentList
    },
    actions: {
      getList: getContentList,
      updateHeadline: updateHeadline
    }
  },
  created () {
    this.updateHeadline(HISTROY_TITLE)
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
.histroy-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
  overflow: scroll;
}
.histroy-page {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
