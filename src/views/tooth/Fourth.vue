<!-- 列表页 -->
<template>
  <div class="tooth">
    <div class="tooth-wrap">
      <div class="tooth-fourth">
      	<ul>
      		<li v-for="teeth in toothIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<span class="tooth-number" :class="'tooth-' + teeth">{{teeth}}</span>
      		</li>
      	</ul>
      </div>
    </div>
    <div class="tooth-footer">
    	<button class="save-and-back" @click="submit">保存并返回</button>
    </div>
  </div>
</template>
<script type="text/babel">
import {FOURTH_TITLE, TOOTH_FOURTH_INDEXS} from '../../constants'
import {brokenList, cariesList} from '../../vuex/getters'
import {updateHeadline, submitTooth} from '../../vuex/actions'
export default {
  data () {
    return {
      toothIndexs: TOOTH_FOURTH_INDEXS
    }
  },
  components: {
  },
  vuex: {
    getters: {
      brokenList,
      cariesList
    },
    actions: {
      updateHeadline,
      submitTooth
    }
  },
  methods: {
    isBlack (i) {
      var isBroken = this.brokenList.indexOf(i) !== -1
      var isCaries = this.cariesList.indexOf(i) !== -1
      return isBroken || isCaries
    },
    submit () {
      this.submitTooth()
      this.$router.go('/tooth')
    }
  },
  created () {
    this.updateHeadline(FOURTH_TITLE)
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
@import '../../styles/css/tooth';
.tooth-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 149px;
  // padding: 40px 70px 0 70px;
  background-color: $tooth-bg;
  overflow: scroll;
}
.tooth-footer {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 150px;
 	background-color: $tooth-bg;
}
.tooth-fourth {
  position: relative;
  height: 100%;
  width: 100%;

  .tooth-icon {
  	position: absolute;
  	height: 30px;
  	width: 30px;
  	background-repeat: no-repeat;
  	transform: rotateY(180deg) rotateX(180deg);

  	@each $key, $value in $tooth-first-icon-map {
      &.tooth-4#{$key} {
        transform: rotateY(180deg) rotateX(180deg);
        width: map-get($value, width);
        height: map-get($value, height);
        top: (1135px - map-get($value, height) - (map-get($value, top) - 150px)); //设计图坐标包括微信头部，需要减去
        left: (700px - map-get($value, width) - map-get($value, left));
      }
    }
  } //end of tooth-icon

  .tooth-number {
	position: absolute;
	font-size: 36px;
	color: #7a7272;

  	@each $key, $value in $tooth-first-number-map {
      &.tooth-4#{$key} {
        top: (1135px - 40px -(map-get($value, top) - 150px)); //设计图坐标包括微信头部，需要减去
        left: (690px - 30px - map-get($value, left));
      }
    }
  } //end of tooth-number
}
</style>
