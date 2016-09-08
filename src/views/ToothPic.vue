<template>
	<div class="tooth-pic">
		<div class="pic-zone">
			<div class="pic_uploader" :class="{'hide_cross': upper}">
        <form id="upper-form" enctype="multipart/form-data">
			    <input class="pic_uploader__input" type="file" name="file_data" id="upper" accept="image/*" enctype="multipart/form-data" v-on:change="uploadPic">
			    <div v-show="hasUpper" class="pic_uploader__cancel" @click="removePic('upper')"></div>
			    <div v-if="hasUpper" :style="'background-image: url(' + upperUrl + ')'" alt="" class="pic_uploader__img"></div> 
        </form>
			</div>
			<p class="pic-title">请选择上牙齿照片</p>
		</div>
		<div class="pic-zone">
			<div class="pic_uploader" :class="{'hide_cross': lower}">
        <form id="lower-form" enctype="multipart/form-data">
          <input class="pic_uploader__input" type="file" name="file_data" id="lower" accept="image/*" enctype="multipart/form-data" @change="uploadPic">
          <div v-show="hasLower" class="pic_uploader__cancel" @click="removePic('lower')"></div>
          <div v-if="hasLower" :style="'background-image: url(' + lowerUrl + ')'" alt="" class="pic_uploader__img"></div> 
        </form>
      </div>
			<p class="pic-title">请选择下牙齿照片</p>
		</div>
		<div class="next">
			<button @click="next">下一步</button>
		</div>
    <loading :show="showLoading" :text="'正在上传'"></loading>
    <toast :show.sync="showToast" :time="500">上传成功</toast>
	</div>


<!--   <form id="myForm" @submit="uploadPic">
      <div class="weui_uploader_input_wrp">
        <input class="weui_uploader_input" name="file_data" id="file_data" type="file" accept="image/*" multiple @change="onFileChange" />
      </div>
      <input class="weui_btn weui_btn_primary" type="submit" value="送出">
    </form> -->
</template>
<script>
/*global alert:true $:true FormData:true Image:true FileReader:true*/
/*eslint no-unused-vars: ["warn", { "vars": "local" }]*/
import {submitToothPic, deleteToothPic} from '../vuex/actions'
import {lower, upper} from '../vuex/getters'
import {API_UPLOAD_PIC, API_ROOT, API_ROOT_PRO, DEFAULT_PIC} from '../constants'
import loading from 'vux-components/loading'
import toast from 'vux-components/toast'
export default {
  data () {
    return {
      showLoading: false,
      showToast: false
    }
  },
  components: {
    loading,
    toast
  },
  vuex: {
    getters: {
      lower,
      upper
    },
    actions: {
      submitToothPic,
      deleteToothPic
    }
  },
  computed: {
    upperUrl () {
      console.log(API_ROOT_PRO)
      return API_ROOT_PRO + (this.upper ? this.upper : DEFAULT_PIC)
    },
    lowerUrl () {
      return API_ROOT_PRO + (this.lower ? this.lower : DEFAULT_PIC)
    },
    hasUpper () {
      return this.upper !== null && this.upper !== DEFAULT_PIC
    },
    hasLower () {
      return this.lower !== null && this.lower !== DEFAULT_PIC
    }
  },
  methods: {
    next () {
      if (this.hasLower && this.hasUpper) {
        this.$route.router.go('/tooth')
      } else {
        alert('请上传2张图片')
      }
    },
    removePic (target) {
      this.deleteToothPic(target)
    },
    uploadPic (event) {
      var vm = this
      var id = event.target.id
      var formdata = new FormData($('#' + id + '-form')[0])
      vm.showLoading = true
      this.$http.post(API_ROOT + API_UPLOAD_PIC, formdata).then((response) => {
        // success
        vm.showLoading = false
        vm.showToast = true
        var json = JSON.parse(response.body)
        if (json.errcode === 0) {
          if (id === 'upper') {
            vm.submitToothPic({
              upper: json.result.img_url[0]
            })
          } else {
            vm.submitToothPic({
              lower: json.result.img_url[0]
            })
          }
        } else {
          alert(json.errmsg || '上传失败')
        }
      }, (response) => {
        // failure
        // var data = JSON.parse(response.body)
        vm.show = false
        console.error(response)
        alert('未知错误')
      })
      /*eslint-disable */
      // var id = event.target.id
      // var vm = this
      // console.log(id)
      // var file = $('#'+id).val();
      // console.log(file);
        // if(!/.(jpg|jpeg|png|bmp|png|webp)$/.test(file)){
        //     return false;
        // }
        // $.ajax({
        //     url: API_UPLOAD_PIC,
        //     data: formdata,
        //     type: "post",
        //     processData: false,  // 关键点
        //     contentType: false,  // 关键点
        //     success: function(data) {
        //         var json = data;
        //         if(json.errcode == 0) {
        //           console.info('success')
        //           if (id == 'upper') {
        //             vm.upper = json.result.img_url[0]
        //           } else {
        //             vm.lower = json.result.img_url[0]
        //           }
        //         }else{
        //             alert(json.errmsg||"上传失败");
        //         }
        //     },
        //     error: function() {
        //     }
        // });
/*eslint-enable */
    },
    ready () {
      // console.log('ready!')
      // var vm = this
      // $('.pic_uploader__input').on('change', '#upper', function () {
      //   vm.upLoadPic()
      // })
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
      &.hide_cross:after, &.hide_cross:before {
        display: none;
      }
      .pic_uploader__input {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        z-index: 10;
      }
      .pic_uploader__img {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
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
        z-index: 10;
        
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
    .pic-title {
      margin-top: 20px;
      text-align: center;
      font-size: 30px; /*px*/
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
