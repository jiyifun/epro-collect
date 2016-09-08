<!-- 列表页 -->
<template>
  <div class="histroy">
    <div class="histroy-wrap">
      <ul v-if="this.histroyList.length > 0" class="histroy-page">
          <li v-for="item in histroyList" class="histroy-item">
            <div class="histroy-item__header">
              <span class="histroy-item__time">星期{{this._getDay(item.create_time)}} {{this._getTime(item.create_time)}}</span>
            </div>
            <div class="histroy-item__body">
              <h3 class="histroy-item__title">采集记录</h3>
              <p class="histroy-item__date">{{this._getMonth(item.create_time)}}月{{this._getDate(item.create_time)}}日</p>
              <p class="histroy-item__recode">客户姓名：{{this.getReplaceString(item.name)}}</p>
              <p class="histroy-item__recode">客户手机：{{this.getReplaceString(item.phone, 4, 3)}}</p>
              <p class="histroy-item__recode">记录状态：待处理</p>
              <div class="histroy-item__footer">
                详情<i class="arrow-right fr"></i>
              </div>
            </div>

          </li>
      </ul>
      <div class="load-more">
        <button v-show="hasMore" @click="getHistroy(this.page)">点击查看更多</button>
        <p v-else> 已是最早记录 </p>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/babel">
/*global FormData:ture*/
import { HISTROY_TITLE, API_GET_HISTROY, DAY_LIST } from '../constants'
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
export default {
  data () {
    return {
      page: 0,
      dayList: DAY_LIST,
      histroyList: [],
      hasMore: true
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
    this.getHistroy(0)
    this.updateHeadline(HISTROY_TITLE)
  },
  methods: {
    _getDay (t) {
      var time = new Date(t)
      return this.dayList[time.getDay()]
    },
    _getMonth (t) {
      var time = new Date(t)
      return time.getMonth() + 1
    },
    _getDate (t) {
      var time = new Date(t)
      return time.getDate()
    },
    _getTime (t) {
      if (t) {
        return t.slice(10)
      }
    },
    getHistroy (page) {
      var vm = this
      var formdata = new FormData()
      // formdata.append('p', page)
      this.$http.get(API_GET_HISTROY + '?p=' + page, formdata).then((resp) => {
        // success
        var data = JSON.parse(resp.body)
        if (data.errcode !== 0) {
          console.error(data.errmsg)
        } else if (data.result.length > 0) {
          vm.histroyList = vm.histroyList.concat(data.result)
          vm.hasMore = true
          vm.page ++
        } else {
          vm.hasMore = false
        }
      }, (resp) => {
        // failure
      })
    },
    getReplaceString (val, m, s) {
      if (!val) {
        return ''
      }
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
  background-color: $gray-default;
  overflow: scroll;
}
.histroy-page {
  position: relative;
  // height: 100%;
  width: 100%;
  // background-color: $gray-default;

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
.load-more {
  padding: 50px;

  button {
    height: 80px;
    width: 650px;
    border-radius: 10px;
    color: #fff;
    background-color: $theme-red;

  }
  p {
    text-align: center;
  }
}
</style>
