// // 存放常量
export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://jiangjiu.leanapp.cn/'
  : 'http://localhost:8080/'

export const HOME_TITLE = '开始采集'
export const HISTROY_TITLE = '采集历史'
export const USERINFO_TITLE = '填写用户信息'

// 牙模型
export const TOOTH_TITLE = '牙齿情况'
export const FIRST_TITLE = '右上区'
export const SECOND_TITLE = '左上区'
export const THIRD_TITLE = '右下区'
export const FOURTH_TITLE = '左下区'

export const TOOTH_INDEXS = [11, 12, 13, 14, 15, 16, 17, 18]
export const TOOTHLIST = [{
  index: 11,
  isBlack: true
}, {
  index: 12,
  isBlack: false
}, {
  index: 13,
  isBlack: false
}, {
  index: 14,
  isBlack: false
}, {
  index: 15,
  isBlack: false
}, {
  index: 16,
  isBlack: false
}, {
  index: 17,
  isBlack: false
}, {
  index: 18,
  isBlack: false
}]
