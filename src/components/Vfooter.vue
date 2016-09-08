<template>
    <div class=" tabbar">
        <a v-link="'/home'" @click="clickTab('home')" class="tabbar-item" :class="{'active': isActive('home')}">
            <p class=" tabbar-label">新建采集</p>
        </a>
        <a v-link="'/histroy'" @click="clickTab('histroy')" class="tabbar-item" :class="{'active': isActive('histroy')}">
            <p class=" tabbar-label">采集历史</p>
        </a>
    </div>
</template>
<script>
import {activeTab} from '../vuex/getters'
import {updateActiveTab, updateHeadline} from '../vuex/actions'
export default {

  vuex: {
    getters: {
      activeTab
    },
    actions: {
      updateHeadline,
      updateActiveTab
    }
  },
  methods: {
    clickTab (value) {
      this.updateActiveTab(value)
    },
    isActive (value) {
      return this.activeTab === value
    }
  }
}
</script>
<style lang="scss" scoped>
@Import '../styles/css/variable';
@import '../styles/css/util/border';
.tabbar {
    position: absolute;
    display: flex;
    height: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid $bordercolor;
    text-align: center;

    .tabbar-item {
        display: inline-block;
        width: 50%;
        background-color: $tab-bg;
        border-right: 1px solid $bordercolor;

        .tabbar-label {
            color: $txt-default;
            font-size: 36px;/*px*/
            line-height: 100px;
        }
        &.active .tabbar-label {
            color: $theme-red;
        }
    }
    .tabbar-item:last-child {
        border: none;
    }
}
</style>
