<!-- 列表页 -->
<template>
  <div class="tooth">
    <div class="tooth-wrap">
      <div class="tooth-fourth">
      	<ul>
      		<li v-for="teeth in toothIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth.index, {'black-tooth': isBlack(teeth.index)}]"  ></button>
      			<span class="tooth-number tooth-{{teeth.index}}">{{teeth.index}}</span>
      		</li>
      	</ul>
      </div>
    </div>
    <div class="tooth-footer">
    	<button class="save-and-back">保存并返回</button>
    </div>
  </div>
</template>
<script type="text/babel">
import {FOURTH_TITLE, TOOTHLIST} from '../../constants'
import {brokenList, cariesList} from '../../vuex/getters'
import {updateHeadline} from '../../vuex/actions'
export default {
  data () {
    return {
      toothIndexs: TOOTHLIST
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
      updateHeadline
    }
  },
  methods: {
    isBlack (i) {
      var isBroken = this.brokenList.indexOf(i) !== -1
      var isCaries = this.cariesList.indexOf(i) !== -1
      return isBroken || isCaries
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

  	@each $key, $value in $tooth-fourth-icon-map {
  		&.tooth-#{$key} {
  			width: map-get($value, width);
  			height: map-get($value, height);
  			top: map-get($value, top) - 150px; //设计图坐标包括微信头部，需要减去
  			left: map-get($value, left);
  		}
  	}
  } //end of tooth-icon

  .tooth-number {
	position: absolute;
	font-size: 36px;
	color: #7a7272;

	@each $key, $value in $tooth-fourth-number-map {
  		&.tooth-#{$key} {
  			top: map-get($value, top) - 150px; //设计图坐标包括微信头部，需要减去
  			left: map-get($value, left);
  		}
  	}
  } //end of tooth-number
}
</style>
