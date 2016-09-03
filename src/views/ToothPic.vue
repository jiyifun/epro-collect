<template>
	<div class="tooth-pic">
		<div class="pic-zone">
			<div class="pic_uploader">
			    <input class="pic_uploader__input" type="file" name="file_data" id="upload-file" @change="uploadPic">
			    <button v-show="true" class="pic_uploader__cancel"></button>
			    <img v-show="true" src="" alt="" class="pic_uploader__img">
			</div>
			<p class="pic-title">请选择上牙齿照片</p>
		</div>
		<div class="pic-zone">
			<button class="cancel"></button>
			<img src="" alt="" class="pic">
			<p class="pic-title">请选择下牙齿照片</p>
		</div>
		<div class="next">
			<button v-link="'/tooth'">下一步</button>
		</div>
	</div>
</template>
<script>
/*global FormData:true*/
import {submitToothPic} from '../vuex/actions'
import {API_ROOT, API_UPLOAD_PIC} from '../constants'
export default {
  data () {
    return {
      lower: null,
      upper: null
    }
  },
  vuex: {
    actions: {
      submitToothPic
    }
  },
  methods: {
    uploadPic (event) {
      var formdata = new FormData(event.target)
      this.$http.post(API_ROOT + API_UPLOAD_PIC, formdata).then((response) => {
        // success
      }, (response) => {
        // failure
      })
    }
  }

}
</script>
<style lang="scss">
@import '../styles/css/variable';
.tooth-pic {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  .pic-zone {
    position: relative;
    margin-top: 50px;

    .pic_uploader {
      position: relative;
      margin: 0 auto;
      width: 400px;
      height: 300px;
      border: 1px solid #d9d9d9;
      
      &:after {
          width: 50%;
          height: 2px;
      }
      &:before {
          width: 2px;
          height: 50%;
      }
      &:after, &:before {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-color: #d9d9d9;
      }
      .pic_uploader__input {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
      .pic_uploader__img {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .pic_uploader__cancel {
        position: absolute;
        right: 0;
        top: 0;
        margin: -25px;
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 50%;

        &:after {
            width: 50%;
            height: 4px;
        }
        &:before {
            width: 4px;
            height: 50%;
        }
        &:after, &:before {
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) rotate(45deg);
            background-color: #fff;
        }
      }
    }

  }

}

.next button {
  margin: 30px auto;
  display: block;
  width: 96%;
  background-color: $theme-red;
  height: 100px;
  border-radius: 10px;
  color: #fff;
  font-size: 38px; /*px*/
}
</style>
