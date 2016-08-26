<template>
 <div class="health">
    <div class="health-wrap">
      <!-- 牙周组织数据 -->
      <div class="examination periodontium">
        <div class="examination-item">
          <div class="examination-item__label">颜色</div>
          <div class="examination-item__value">红肿</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">外形</div>
          <div class="examination-item__value">整齐</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">质地</div>
          <div class="examination-item__value">正常</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">溢浓</div>
          <div class="examination-item__value">无</div>
        </div>
        <p class="examination-title">牙周组织检查</p>
      </div>
      <!-- 用户数据选择 -->
      <div class="user-picker">
        <a class="menu">
          我的-<span class="user-name">儿子</span>
          <i class="arrow-down"></i>
        </a>
      </div>
      <!-- 口腔健康指数环形进度条 -->
      <div class="health-rote">
        <div class="circle-bg">
          <div class="blue-ring"></div>
          <div class="green-ring"></div>
          <div class="white-marsk"></div>
        </div>
        <div class="health-circle">
          <circle :percent='percent2' :stroke-width=4 :trail-width=4 :stroke-color='strokeColor2' trail-color="#e1e1e1">
            <div class="health-data">
              <strong class="health-percent">{{percent2}}</strong><span>分</span>
              <p>口腔健康指数</p>
            </div>
          </circle>
        </div>
      </div>
      <!-- 就诊建议 -->
      <div class="proposal">
        <h3 class="proposal-title">
          建议
        </h3>
        <p class="proposal-content">
          洁牙、矫正、补牙、种植
        </p>
      </div>
      <!-- 牙齿检查数据 -->
      <div class="examination tooth">
        <p class="examination-title">牙齿检查</p>
        <div class="examination-item">
          <div class="examination-item__label">颜色</div>
          <div class="examination-item__value">泛黄</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">外形</div>
          <div class="examination-item__value">整齐</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">动度</div>
          <div class="examination-item__value">正常</div>
        </div>
        <div class="examination-item">
          <div class="examination-item__label">龋齿</div>
          <div class="examination-item__value">有</div>
        </div>
      </div>
      <!-- 其他项目 -->
      <div class="other">
        <div class="other-header">
          <img src="../assets/tooth.png" alt="" class="tooth">
          <span class="last-check-time">暂无数据</span>
        </div>
        <div class="health-line">
          <div style="width: {{percent2}}%" class="health-line__percent"></div>
        </div>
        <div class="other-content">
          <div class="other-item">
            <em class="other-item__label">牙齿数目</em>
            <p class="other-item__value">32</p>
          </div>
          <div class="other-item">
            <em class="other-item__label">牙齿排列</em>
            <p class="other-item__value">整齐</p>
          </div>
          <div class="other-item">
            <em class="other-item__label">口腔黏膜</em>
            <p class="other-item__value">正常</p>
          </div>
          <div class="other-item">
            <em class="other-item__label">咬合关系</em>
            <p class="other-item__value">正常</p>
          </div>
        </div>
      </div>
    </div>  
   <tabbar></tabbar> 
 </div>
</template>

<script type="text/babel">
  import {contentList} from '../vuex/getters'
  import {getContentList, updateHeadline} from '../vuex/actions'
  import Circle from 'vux/src/components/circle'

  export default {
    components: {
      Circle
    },
    vuex: {
      getters: {
        items: contentList
      },
      actions: {
        getList: getContentList,
        updateHeadline: updateHeadline
      }
    },
    data () {
      return {
        percent2: 90,
        strokeColor2: '#3FC7FA'
      }
    },
    created () {
      this.getList()
      this.updateHeadline('主页')
    },
    ready () {
      // this.updateHeadline('主页')
    }
  }
</script>

<style lang="scss" scope>
@import '../styles/css/variable';

.health-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 40px 70px 0 70px;
  background-color: #fff;
}
/*数据胶囊*/
 .examination {
  width: 305px;
  position: relative;
  
  .examination-title {
      position: absolute;
      transform:rotate(-35deg);
      colot: $txt-default;
  }
  .examination-item {
    position: absolute;
    width: 50px;
    height: 200px;
    border-radius: 25px;
    background-color: $theme-blue;
    text-align: center;
    line-height: 1.2;

    .examination-item__label {
      padding: 20px 10px 0 10px;
      color: #fff;
      height: 78px;
      border-bottom: 1px solid $gray-deep;
    }
    .examination-item__value {
      color: $txt-bold;
      padding: 20px 10px 0 10px;
    }
  }
  // 牙周部分
  &.periodontium {
    .examination-item:nth-child(1) {
      top: 160px;
      left: 0px;
    }
    .examination-item:nth-child(2) {
      top: 90px;
      left: 85px;
    }
    .examination-item:nth-child(3) {
      top: 26px;
      left: 170px;
    }
    .examination-item:nth-child(4) {
      top: 0px;
      left: 255px;
    }
    .examination-title {
      top: 260px;
      left: 110px;
    }
  }
  // 牙齿部分
  &.tooth {
    .examination-item:nth-child(2) {
      top: 54px;
      left: 0px;
    }
    .examination-item:nth-child(3) {
      top: 22px;
      left: 85px;
    }
    .examination-item:nth-child(4) {
      top: -40px;
      left: 170px;
    }
    .examination-item:nth-child(5) {
      top: -110px;
      left: 255px;
    }
    .examination-title {
      left: 50px;
      top: -20px;
    }
  }
 }

/*选择用户数据*/
.user-picker {
  float: right;

  a {
    display: block;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    background-color: $gray-default;
    border-radius: 6px;
    color: $txt-default;

    span {
      color: $txt-bold;
    }
    i {
      width: 12px;
      height: 12px;
      display: inline-block;
      background-repeat: no-repeat;
      background-image: url('../assets/arrow-down.png')
    }
  }
 }  
/*健康指数环*/
 .health-rote {
  position: relative;
  margin: 264px auto 0;
  width:290px;
  height:290px;
  border-radius: 50%;
  overflow: hidden;
  // background-color: $theme-blue;
 }

 .circle-bg {
  position: absolute;
  width:290px;
  height:290px;
  background-color: $gray-deep;
  border-radius: 50%;
  overflow: hidden;

  .blue-ring {
    top: 0;
    left: 0;
    right: 50%;
    bottom: 50%;
    position: absolute;
    background-color: $theme-blue;
    border-top-left-radius:100%;
    overflow: hidden;
  }
  .green-ring {
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: $green;
    border-bottom-right-radius: 100%;
    overflow: hidden;
  }
  .white-marsk {
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background-color: #fff;
    border-radius: 50%;
  }
 }
 .health-circle {
  position: relative;
  margin: 35px auto; 
  width: 220px;
  height: 220px;

  .health-data {
    margin-top: -30px;

    .health-percent {
      font-size: 80px;/*px*/
      font-weight: lighter;
      color: $txt-default;
    }
    span {
      font-size: 36px;/*px*/
      color: $txt-default;
    }
  }
  
 }
/*就诊建议*/
.proposal {
  position: relative;
  float: left;
  width: 198px;
  height: 136px;
  border-radius: 6px;
  background-color: $gray-default;
  

  .proposal-title {
    position: absolute;
    margin-top: -50px;
    padding: 5px 10px;
    background-color: $gray-default;
    font-size: 24px;/*px*/
    border-radius: 6px;
  }
  .proposal-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    color: $txt-bold;
    font-size: 30px;/*px*/

  }
}

//牙齿检查
.tooth {
  left: 50%;
}
.periodontium {
  position: absolute;
  right: 50%;
}
/*其他项目*/
.other {
  margin-top: 230px;
  width: 100%;
  height: 230px;

  .tooth {
    width: 58px;
    height: 82px;
  }

  .health-line {
    position: relative;
    height: 2px;
    width: 95%;
    margin: 0 auto;
    background-color: $gray-deep;

    .health-line__percent {
      position: absolute;
      height: 2px;
      background-color: $theme-blue;
    }
  }

  .other-content {
    margin-top: 10px;
    width: 100%;
    height: 70px;
    padding: 30px 0;
    border-radius: 5px;
    box-shadow: 0 5px 10px 3px $gray-deep;
    text-align: center;

    .other-item {
      display: inline-block;
      width: 23%;
      height: 60px;
      border-right: 1px solid $gray-deep;/*px*/
      line-height: 1;
      .other-item__label {
        color: $txt-bold;
        font-size: 24px;/*px*/
      }
      .other-item__value {
        margin-top: 10px;
        color: $txt-default;
        font-size: 28px; /*px*/
      }
    }

    .other-item:last-child {
      border: none;
    }

  }


}
</style>
