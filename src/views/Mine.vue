<!-- 个人中心页 -->
<template>
<!--   <div id="main">
    <p class="not">个人中心</p>
    <form @submit.prevent="submit">
      <div class="weui_uploader_input_wrp">
        <input class="weui_uploader_input" name="file_data" id="file_data" type="file" accept="image/*" multiple />
      </div>
      <input class="weui_btn weui_btn_primary" type="submit" value="送出">
    </form>
    <tabbar></tabbar>
</div> -->
<div class="mine">
  <div class="mine-warp">
    <div class="mine-header">
      <div class="mine-avatar">
        <a  class="mine-avatar-btn">
          <!-- ../assets/order/avatar.png -->
          <img src="../assets/avatar.png" alt="" class="mine-avatar-photo">
        </a>
      </div>
      <div class="mine-description">
        <span class="mine-name">苏格拉底</span>
        <span class="mine-age">23岁</span>
      </div>
    </div>
    <div class="mine-order">
      <div class="mine-order-title">
        <div class="mine-order-title__left">
          <i class="mine-order-icon"></i>
          <em>我的订单</em>
        </div>
        <div class="mine-order-title__right">
          <span class="mine-order-checkall">查看全部订单</span>
          <i class="arrow-right"></i>
        </div>

      </div>
      <ul class="mine-order-types">
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_unpay.png" alt="" class="order-types-icon unpay">
            <span class="order-types-name">未付款</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_unused.png" alt="" class="order-types-icon unused">
            <span class="order-types-name">未消费</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_used.png" alt="" class="order-types-icon used">
            <span class="order-types-name">已消费</span>
          </a>
        </li>
        <li class="mine-order-types__item">
          <a  class="order-types-link">
            <img src="../assets/order/icon_pay-back.png" alt="" class="order-types-icon payback">
            <span class="order-types-name">退款单</span>
          </a>
        </li>
      </ul>
    </div>  
    <div class="mine-other">
      <ul class="mine-other-items">
        <li class="other-item">
          <a  class="other-item-link">
            <em class="other-item-title">我的健康指数</em>
            <ul class="star-list">
              <li class="star-item star"><i class="star-icon"></i></li>
              <li class="star-item star"><i class="star-icon"></i></li>
              <li class="star-item star"><i class="star-icon"></i></li>
              <li class="star-item unstar"><i class="star-icon"></i></li>
              <li class="star-item unstar"><i class="star-icon"></i></li>
            </ul>
          </a>
        </li>
        <li class="other-item"><a  class="other-item-link"><span class="other-item-title">我的看牙日记</span></a></li>
        <li class="other-item"><a  class="other-item-link"><span class="other-item-title">开始就诊</span></a></li>
      </ul>
    </div>
  </div>
  <tabbar></tabbar>
</div>
</template>
<script>
/*global FormData:true*/
/*eslint no-undef: "error"*/
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline, uploadPic} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
export default {
  components: {
    Tabbar
  },
  vuex: {
    getters: {
      items: contentList
    },
    actions: {
      getList: getContentList,
      updateHeadline: updateHeadline,
      uploadPic
    }
  },
  created () {
    this.getList()
    this.updateHeadline('个人中心页')
  },
  methods: {
    submit: function (event) {
      // FormData支援把 Form 元素丟進去
      var formData = new FormData(event.target)

      // this.$http.post('http://test.e-pro.com.cn/cgi/wx/file_upload', formData, function (data, status, request) {
      //      // Success
      // }).error(function (data, status, request) {
      //      // Error
      // })
       // POST /someUrl
      this.$http.post('/e-api/cgi/wx/file_upload', formData).then((response) => {
        // get status
        console.log(response.status)

        // get status text
        console.log(response.data)

        // get all headers
        console.log(response.headers)

        // get 'Expires' header
        // response.headers['Expires']

        // set data on vm
        // this.$set('someData', response.json())
      }, (response) => {
          // error callback
      })
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
@import '../styles/css/util/border';

.mine-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
  overflow: scroll;
}

.mine-header {
  position: relative;
  height: 264px;
  width: 100%;
  padding-top: 30px;
  background-color: $gray-bg;

  .mine-avatar {
    margin: 0 auto;
    width: 184px;
    height: 184px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;/*px*/

    .mine-avatar-btn {
      display: block;
    }

    img.mine-avatar-photo {
      margin: 13px;
      width: 156px;
      height: 156px;
      border: 2px solid #fff;
      border-radius: 50%;
      overflow: hidden;
    }

  }
  .mine-description {
    line-height: 70px;
    text-align: center;
  }
}

.mine-order {
  background-color: #fff;

  .mine-order-title {
    position: relative;
    height: 80px;
    padding: 0 70px;
    line-height: 80px;
    border-bottom: 1px solid #d3d3d3;/*px*/

    .mine-order-title__left {
      // float: left;
      position: absolute;
      .mine-order-icon {
        position: absolute;
        display: inline-block;
        margin-top: 23px;
        width: 28px;
        height: 32px;
        background-image: url('../assets/order/icon_mine-order.png');
      }
      em {
        padding-left: 35px;
        color: $txt-bold;
        font-size: 28px;
      }
    }
    .mine-order-title__right {
      float: right;

      .arrow-right {
        display: inline-block;
        width: 10px;
        height: 18px;
        background-image: url('../assets/arrow-right.png');
      }
    }
    
  }

  .mine-order-types {
    text-align: center;
    height: 150px;

    li.mine-order-types__item {
      display: inline-block;
      padding: 20px 30px;

      a.order-types-link {
        display: block;
        width: 100px;

        img.order-types-icon {
          display: block;
          margin: 0 auto;
        }
      }
    }

  }
}
.mine-other {
  background-color: #e9e9e9;
  padding-top: 10px;

  .mine-other-items {
    background-color: #fff;
    padding: 0 30px;

    li.other-item {
      padding: 0 40px;
      border-bottom: 1px solid #d3d3d3;
      line-height: 100px;

      .other-item-title {
        font-size: 32px;/*px*/
        color: $txt-bold;
      }
      .star-list {
        float: right;
        text-align: right;

        .star-item {
          display: inline-block;
          
          .star-icon {
            display: block;
            height: 19px;
            width: 20px;
          }
          &.star .star-icon {
            background-image: url('../assets/order/icon_star.png');
          }
          &.unstar .star-icon {
            background-image: url('../assets/order/icon_unstar.png');
          }
        }
      }
    }
  }
}
</style>
