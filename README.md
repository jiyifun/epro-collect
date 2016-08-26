# fe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### 获取口腔数据
method:GET
url: api/mouth_data?user_id={uid}
| params | description | type | example | 
| uid | 用户ID | TEXT | 001 | 
```
{
	success: true,
	info: '获取数据成功',
	data: {
		// 12项检查
		examination:{
			1:'xxx',
			2:'xxx',
			...
		},
		// 总评
		percent: 90,
		// 建议
		poprosal: '洁牙、矫正、补牙、种植',
		// 检查时间
		checked_at: '2016-08-25 18:00:00',
		// 用户名称
		username: '哆啦A梦',
		alias: '儿子'
	}
}
