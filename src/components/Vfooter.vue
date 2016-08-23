<template>
	<div class="ui-tab">
		<ul class="ui-tab-nav ">
			<li :class="{active: isActive('主页')}"><a v-link="'/home'"><i class="ui-icon ui-icon-add"></i>home</a></li>
			<li :class="{active: isActive('列表页')}"><a v-link="'/list'">list</a></li>
			<li :class="{active: isActive('个人中心页')}"><a v-link="'/mine'">mine</a></li>
			<li :class="{active: isActive('管理设置页')}"><a v-link="'/setting'">setting</a></li>
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
    '../styles/css/component/tab';

    .ui-tab-nav li.active a {
      color: #2200e2;
    }

</style>
