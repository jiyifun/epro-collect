<!-- 个人中心页 -->
<template>
  <div id="main">
    <p class="not">个人中心</p>
    <form @submit.prevent="submit">
      头像
        <input type="file" name="file_data" id="file_data">
        <input type="submit" value="送出">
    </form>
</div>
</template>
<script>
/*global FormData:true*/
/*eslint no-undef: "error"*/
import {contentList} from '../vuex/getters'
import {getContentList, updateHeadline} from '../vuex/actions'

export default {
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
<style>
.not{
  text-align: center;
  font-size: 32px;
  margin-top: 18%;
}
</style>
