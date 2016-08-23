<!-- 个人中心页 -->
<template>
  <p class="not">个人中心</p>
</template>
<script>
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
    this.getList()
    this.updateHeadline('个人中心页')
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
