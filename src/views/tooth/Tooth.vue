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
    	<button class="save-and-back" @click="submit">提交报告</button>
    </div>
  </div>
</template>
<script type="text/babel">
/*global FormData:true alert:true*/
import {TOOTH_TITLE, TOOTH_FIRST_INDEXS, TOOTH_SECOND_INDEXS, TOOTH_THIRD_INDEXS, TOOTH_FOURTH_INDEXS, API_UPLOAD_REPORT, API_ROOT} from '../../constants'
import {userId,
      brushCount,
      isBled,
      isLoosen,
      isCleaned,
      isUnwell,
      lower,
      upper,
      cariesList,
      brokenList} from '../../vuex/getters'
import {updateHeadline, submitReport, cleanAll} from '../../vuex/actions'
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
      userId,
      brushCount,
      isBled,
      isLoosen,
      isCleaned,
      isUnwell,
      lower,
      upper,
      cariesList,
      brokenList
    },
    actions: {
      updateHeadline,
      submitReport,
      cleanAll
    }
  },
  methods: {
    isBlack (i) {
      var isBroken = this.brokenList.indexOf(i) !== -1
      var isCaries = this.cariesList.indexOf(i) !== -1
      return isBroken || isCaries
    },
    submit () {
      var vm = this
      var formdata = new FormData()
      formdata.append('user_id', this.userId)
      formdata.append('brushCount', this.brushCount)
      formdata.append('isBled', this.isBled)
      formdata.append('isLoosen', this.isLoosen)
      formdata.append('isCleaned', this.isCleaned)
      formdata.append('isUnwell', this.isUnwell)
      formdata.append('upper', this.upper)
      formdata.append('lower', this.lower)
      formdata.append('cariesList', this.cariesList)
      formdata.append('brokenList', this.brokenList)
      this.$http.post(API_ROOT + API_UPLOAD_REPORT, formdata).then((response) => {
        // success
        var json = JSON.parse(response.body)
        if (json.errcode === 0) {
          alert('提交成功！')
          vm.cleanAll()
          vm.$route.router.go('/home')
        } else {
          alert('提交失败！' + json.errmsg)
        }
      }, (response) => {
        // error
        console.error(response)
        alert('未知错误')
      })
    }
  },
  created () {
    this.updateHeadline(TOOTH_TITLE)
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
  border-bottom: 2px dashed #646464;
  border-right: 2px dashed #646446;
}
.tooth-zone:nth-child(2) {
  border-bottom: 2px dashed #646464; /*px*/
}
.tooth-zone:nth-child(3) {
  border-right: 2px dashed #646464; /*px*/
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
        top: (1035px - map-get($value, height) - (map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: map-get($value, left) / 2;
      }
    }
    @each $key, $value in $tooth-first-icon-map {
      &.tooth-4#{$key} {
        transform: rotateY(180deg) rotateX(180deg);
        width: map-get($value, width) / 2;
        height: map-get($value, height) / 2;
        top: (1035px - map-get($value, height) - (map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
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
        top: (1035px - 40px -(map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: map-get($value, left) / 2;
      }
    }
    @each $key, $value in $tooth-first-number-map {
      &.tooth-4#{$key} {
        top: (1035px - 40px -(map-get($value, top) - 150px)) / 2; //设计图坐标包括微信头部，需要减去
        left: (690px - 30px - map-get($value, left)) / 2;
      }
    }
  } //end of tooth-number
}
</style>
