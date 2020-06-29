import Taro,{ } from '@tarojs/taro';
export default function useJump(){
  function jump(skipUrl:string ,skipType:number = 2){
    if(!skipUrl){
      return false
    }
    if(skipType==2){
      Taro.switchTab({url:skipUrl})
    }
    if(skipType==3){
      Taro.navigateTo({url:skipUrl})
    }
  }
  return jump
}