<!-- 列表页 -->
<template>
  <div class="histroy">
    <div class="histroy-wrap">
      <ul class="histroy-page">
          <li v-for="item in histroyList" class="histroy-item">
            <div class="histroy-item__header">
              <span class="histroy-item__time">星期日 下午2:20</span>
            </div>
            <div class="histroy-item__body">
              <h3 class="histroy-item__title">采集记录</h3>
              <p class="histroy-item__date">9月5日</p>
              <p class="histroy-item__recode">客户姓名：{{this.getReplaceString(item.user_name)}}</p>
              <p class="histroy-item__recode">客户手机：{{this.getReplaceString(item.user_phone, 4, 3)}}</p>
              <p class="histroy-item__recode">记录状态：待处理</p>
              <div class="histroy-item__footer">
                详情<i class="arrow-right fr"></i>
              </div>
            </div>

          </li>
      </ul>
      <div class="load-more">
        <button>点击查看更多</button>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/babel">
import { HISTROY_TITLE } from '../constants'
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
export default {
  data () {
    return {
      page: 0,
      histroyList: [{
        id: 1,
        user_name: '张全蛋',
        user_phone: '12312345678',
        time: '2016-09-07 15:42:26'
      }]
    }
  },
  components: {
    Tabbar
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
  created () {
    this.updateHeadline(HISTROY_TITLE)
  },
  methods: {
    getReplaceString (val, m, s) {
      var many
      var rpStr = ''
      var str = val.split('')
      var len = str.length
      if (len > 2) {
        if (m) {
          many = m
        } else {
          many = len - 2
        }
      } else {
        many = 1
      }
      for (var i = many - 1; i >= 0; i--) {
        rpStr += '*'
      }
      Array.prototype.splice.call(str, s || 1, many, rpStr)
      console.log(str)
      return str.join('')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
.histroy-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  background-color: #fff;
  overflow: scroll;
}
.histroy-page {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $gray-default;

  .histroy-item {
    padding: 20px;

    .histroy-item__header {
      text-align: center;

      .histroy-item__time {
        padding: 3px 5px;
        background-color: $gray-deep;
        border-radius: 5px;
        font-size: 24px; /*px*/
        color: #fff;
      }
    }

    .histroy-item__body {
      margin-top: 10px;
      padding: 10px 20px;
      border: 2px solid $bordercolor;
      border-radius: 10px;
      background-color: #fff;

      .histroy-item__title {
        font-size: 32px;/*px*/
        font-weight: bold;
      } 

      .histroy-item__date {
        color: $label-color;
      }
      .histroy-item__footer {
        border-top: 1px solid $bordercolor;
      }
    }
  }
}
</style>
