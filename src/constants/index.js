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

export const TOOTH_FIRST_INDEXS = [11, 12, 13, 14, 15, 16, 17, 18]
export const TOOTH_SECOND_INDEXS = [21, 22, 23, 24, 25, 26, 27, 28]
export const TOOTH_THIRD_INDEXS = [31, 32, 33, 34, 35, 36, 37, 38]
export const TOOTH_FOURTH_INDEXS = [41, 42, 43, 44, 45, 46, 47, 48]

export const API_UPLOAD_PIC = 'e-api/cgi/wy/pic'
