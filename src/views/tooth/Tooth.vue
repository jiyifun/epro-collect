<!-- 列表页 -->
<template>
  <div class="tooth">
    <div class="tooth-wrap">
      <div class="tooth-zone" v-link="'/tooth/first'">
      	<ul>
      		<li v-for="teeth in toothFirstIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<!-- <button class="tooth-icon tooth-{{teeth.index}}"  v-else></button>	 -->
      			<span class="tooth-number" :class="'tooth-' + teeth">{{teeth}}</span>
      		</li>
      	</ul>
      </div>
      <div class="tooth-zone" v-link="'/tooth/second'">
      	<ul>
      		<li v-for="teeth in toothSecondIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<!-- <button class="tooth-icon tooth-{{teeth.index}}"  v-else></button>	 -->
      			<span class="tooth-number" :class="'tooth-' + teeth">{{teeth}}</span>
      		</li>
      	</ul>
      </div>
      <div class="tooth-zone" v-link="'/tooth/third'">
      	<ul>
      		<li v-for="teeth in toothThirdIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<!-- <button class="tooth-icon tooth-{{teeth.index}}"  v-else></button>	 -->
      			<span class="tooth-number" :class="'tooth-' + teeth">{{teeth}}</span>
      		</li>
      	</ul>
      </div>
      <div class="tooth-zone" v-link="'/tooth/fourth'">
      	<ul>
      		<li v-for="teeth in toothFourthIndexs">

      			<button class="tooth-icon"  :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<!-- <button class="tooth-icon tooth-{{teeth.index}}"  v-else></button>	 -->
      			<span class="tooth-number" :class="'tooth-' + teeth">{{teeth}}</span>
      		</li>
      	</ul>
      </div>
    </div>
    <div class="tooth-footer" >
    	<button class="save-and-back">保存并返回</button>
    </div>
  </div>
</template>
<script type="text/babel">
import {FIRST_TITLE, TOOTH_FIRST_INDEXS, TOOTH_SECOND_INDEXS, TOOTH_THIRD_INDEXS, TOOTH_FOURTH_INDEXS} from '../../constants'
import {brokenList, cariesList} from '../../vuex/getters'
import {updateHeadline, submitTooth} from '../../vuex/actions'
export default {
  data () {
    return {
      toothFirstIndexs: TOOTH_FIRST_INDEXS,
      toothSecondIndexs: TOOTH_SECOND_INDEXS,
      toothThirdIndexs: TOOTH_THIRD_INDEXS,
      toothFourthIndexs: TOOTH_FOURTH_INDEXS
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
    this.updateHeadline(FIRST_TITLE)
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
  padding: 20px;
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
.tooth-zone:nth-child(1) {
  border-bottom: 1px dashed #fff;
  border-right: 1px dashed #fff;
}
.tooth-zone:nth-child(2) {
  border-bottom: 1px dashed #fff; /*px*/
}
.tooth-zone:nth-child(3) {
  border-right: 1px dashed #fff; /*px*/
}
.tooth-zone {
  position: relative;
  height: 50%;
  width: 354px;
  float: left;

  .tooth-icon {
  	position: absolute;
  	background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  	@each $key, $value in $tooth-first-icon-map {
  		&.tooth-1#{$key} {
  			width: map-get($value, width) / 2;
  			height: map-get($value, height) / 2;
  			top: (map-get($value, top) - 150px) / 2; //设计图坐标包括微信头部，需要减去
  			left: map-get($value, left) / 2;
  		}
  	}
    @each $key, $value in $tooth-first-icon-map {
      &.tooth-2#{$key} {
        transform: rotateY(180deg);
        width: map-get($value, width) / 2;
        height: map-get($value, height) / 2;
        top: (map-get($value, top) - 150px) / 2; //设计图坐标包括微信头部，需要减去
        left: (700px - map-get($value, width) - map-get($value, left)) / 2;
      }
    }
    @each $key, $value in $tooth-first-icon-map {
      &.tooth-3#{$key} {
        transform: rotateX(180deg);
        width: map-get($value, width) / 2;
        height: map-get($value, height) / 2;
        top: (1135px - map-get($value, height) - (map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: map-get($value, left) / 2;
      }
    }
    @each $key, $value in $tooth-first-icon-map {
      &.tooth-4#{$key} {
        transform: rotateY(180deg) rotateX(180deg);
        width: map-get($value, width) / 2;
        height: map-get($value, height) / 2;
        top: (1135px - map-get($value, height) - (map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: (700px - map-get($value, width) - map-get($value, left)) / 2;
      }
    }
  } //end of tooth-icon

  .tooth-number {
	position: absolute;
	font-size: 26px; /*px*/
	color: #7a7272;
  width: 30px;
  height: 40px;

  	@each $key, $value in $tooth-first-number-map {
  		&.tooth-1#{$key} {
  			top: (map-get($value, top) - 150px) / 2; //设计图坐标包括微信头部，需要减去
  			left: map-get($value, left) / 2;
  		}
  	}
    @each $key, $value in $tooth-first-number-map {
      &.tooth-2#{$key} {
        top: (map-get($value, top) - 150px) / 2; //设计图坐标包括微信头部，需要减去
        left: (690px - 30px - map-get($value, left)) / 2;
      }
    }
    @each $key, $value in $tooth-first-number-map {
      &.tooth-3#{$key} {
        top: (1135px - 40px -(map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: map-get($value, left) / 2;
      }
    }
    @each $key, $value in $tooth-first-number-map {
      &.tooth-4#{$key} {
        top: (1135px - 40px -(map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: (690px - 30px - map-get($value, left)) / 2;
      }
    }
  } //end of tooth-number
}
</style>
