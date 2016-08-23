<!-- 列表页 -->
<template>
  <p class="not">列表页</p>
</template>
<script type="text/babel">
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'

export default {
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
    this.updateHeadline('列表页')
  }
}
</script>
<style>
.not{
  text-align: center;
  font-size: 32px;
  margin-top: 18%;
}
</style>
