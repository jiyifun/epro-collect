<template>
 <div class="user-info">
   <form @submit.prevent="submit">
     <div class="form-wrap">
       <div class="form-item">
        <i class="form-item__icon icon-user"></i>
        <input class="form-item__text-input" placeholder="请输入客户姓名" name="user_name" id="user_name" type="text" />
       </div>
       <div class="form-item">
        <i class="form-item__icon icon-phone"></i>
        <input class="form-item__text-input" placeholder="请输入客户手机" name="user_phone" id="user_phone" type="number" />
       </div>
     </div>
     <input class="form-submit" type="submit" value="下一步">
   </form>
   <loading :show="showLoading"></loading>
 </div>
</template>

<script type="text/babel">
/*global alert:true FormData:true*/
/*eslint no-undef: "error"*/
  import { USERINFO_TITLE, API_CREATE_USER, API_ROOT } from '../constants'
  import { updateHeadline, createUser } from '../vuex/actions'
  import loading from 'vux-components/loading'
  export default {
    data () {
      return {
        showLoading: false
      }
    },
    components: {
      loading
    },
    vuex: {
      actions: {
        updateHeadline,
        createUser
      }
    },
    created () {
      this.updateHeadline(USERINFO_TITLE)
    },
    methods: {
      submit (event) {
        // FormData支持把 Form 元素丟進去
        var that = this
        var formData = new FormData(event.target)
        console.log(event.target)
        that.showLoading = true
        this.$http.post(API_ROOT + API_CREATE_USER, formData).then((response) => {
          // Success
          var data = JSON.parse(response.body)
          that.showLoading = false
          if (data.errcode === 0 && data.result.user_id) {
            that.createUser(data.result.user_id)
            that.$route.router.go('/questionnaire')
          } else {
            alert('该手机号已注册！')
          }
        }, (response) => {
             // Error
          that.showLoading = false
          console.error(response)
          alert('未知错误！')
        })
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
