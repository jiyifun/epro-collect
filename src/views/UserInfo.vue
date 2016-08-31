<template>
 <div class="user-info">
   <form @submit.prevent="submit">
     <div class="form-wrap">
       <div class="form-item">
        <i class="form-item__icon icon-user"></i>
        <input class="form-item__text-input" placeholder="请输入姓名" name="user_name" id="user_name" type="text" />
       </div>
       <div class="form-item">
        <i class="form-item__icon icon-phone"></i>
        <input class="form-item__text-input" placeholder="请输入手机" name="user_name" id="user_name" type="number" />
       </div>
     </div>
     <input class="form-submit" type="submit" value="下一步">
   </form>
 </div>
</template>

<script type="text/babel">
// /*global FormData:true*/
/*eslint no-undef: "error"*/
  import { USERINFO_TITLE } from '../constants'
  import { updateHeadline } from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        updateHeadline: updateHeadline
      }
    },
    created () {
      this.updateHeadline(USERINFO_TITLE)
    },
    methods: {
      submit: function (event) {
        // FormData支持把 Form 元素丟進去
        // var formData = new FormData(event.target)

        // this.$http.post('http://test.e-pro.com.cn/cgi/wx/file_upload', formData, function (data, status, request) {
        //      // Success
        // }).error(function (data, status, request) {
        //      // Error
        // })
         // POST /someUrl
        // this.$http.post('/e-api/cgi/wx/file_upload', formData).then((response) => {
        //   // get status
        //   console.log(response.status)

        //   // get status text
        //   console.log(response.data)

        //   // get all headers
        //   console.log(response.headers)

        //   // get 'Expires' header
        //   // response.headers['Expires']

        //   // set data on vm
        //   // this.$set('someData', response.json())
        // }, (response) => {
        //     // error callback
        // })
      }
    }
  }
</script>

<style lang="scss" scope>
@import '../styles/css/variable';
.user-info {
  padding: 50px;
}  
.form-wrap {
  background-color: #fff;
  border-radius: 10px;

  .form-item {
    height: 114px;
    border-bottom: 1px solid $bordercolor;
    padding: 0 45px;
    
    .form-item__icon {
      position: absolute;
      display: inline-block;
      margin-top: 40px;
      background-position: center;
      background-size: cover;

      &.icon-phone {
        width: 23px;
        height: 35px;
        margin-left: 3px;
        background-image: url('../assets/icon_phone.png');
      }
      &.icon-user {
        width: 34px;
        height: 31px;
        background-image: url('../assets/icon_user.png');
      }
    }
    .form-item__text-input {
       width: 500px;
       height: 34px;
       line-height: 34px;
       font-size: 32px;/*px*/
       padding: 40px 45px;
    }
  }
  .form-item:last-child {
    border: none;
  }
}
.form-submit {
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
