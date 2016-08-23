<template>
	<div class="ui-tab">
		<ul class="ui-tab-nav ">
			<li :class="{current: isActive('主页')}"><a v-link="'/home'">home</a></li>
			<li :class="{current: isActive('列表页')}"><a v-link="'/list'">list</a></li>
			<li :class="{current: isActive('个人中心页')}"><a v-link="'/mine'">mine</a></li>
			<li :class="{current: isActive('管理设置页')}"><a v-link="'/setting'">setting</a></li>
		</ul>
	</div>
</template>
<script>
import {headline} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'
export default {

  vuex: {
    getters: {
      headline
    },
    actions: {
      getList: getContentList,
      updateHeadline: updateHeadline
    }
  },
  methods: {
    isActive (value) {
      return this.headline === value
    }
  }
}
</script>
<style lang="scss" scoped>
@import

    // '../styles/css/mixin',
    // '../styles/css/variable',
    '../styles/css/component/tab'

</style>
