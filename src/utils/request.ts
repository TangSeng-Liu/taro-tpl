import Taro, { getStorageSync } from '@tarojs/taro'
import { baseUrl } from '@/utils/baseUrl'
const noConsole = true


interface OptionsType {
  method: 'GET' | 'POST' | 'PUT'
  data?: any
  url: string
}
export default ({url= '', data = {}, method = 'GET'  }: OptionsType) => {
  
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 URL=${url} 】PARAM=${JSON.stringify(data)}`);
  }
  if(data){
    for (const key in data) {
      if (data.hasOwnProperty(key) && (data[key] === undefined || data[key] == null)) {
        delete data[key];
      }
    }
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: baseUrl + url,
      data: data,
      header: {
        'Content-Type': 'application/json',
        'token': getStorageSync('token'),
      },
      method: method,
      success: res => {
        if (res.data.code == 10000) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      },
      fail: res => {
        reject(res)
      }
    })
  })
};
