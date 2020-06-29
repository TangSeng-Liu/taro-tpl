import Taro, { useState, useEffect, pxTransform } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
interface numType{
  /**
   * 跳动前数字
   */
  before: string | number,
  /**
   * 跳动后数字
   */
  after: string | number,
  /**
   * 字号
   */
  size: number
  /**
   * 显示延时（毫秒）
   * @default 500
   */
  delay?: number
}
function Num ({ before = 0,after = 0, size=24, delay=500 }:numType) {
  const [numArray, setnumArray] = useState<any>([])
  const [decimalArray, setDecimalArray] = useState<any>([])
  useEffect(()=>{
    const before_arr = (before+'').split('.')
    const after_arr = (after+'').split('.')
    
    if(before_arr[0]){
      setnumArray(before_arr[0].split(''))
    }
    if(before_arr[1]){
      setDecimalArray(before_arr[1].split(''))
    }else {
      setDecimalArray([])
    }
    // setnumArray((before+'').split(''))
    setTimeout(() => {
      // setnumArray((after+'').split(''))
      if(after_arr[0]){
        setnumArray(after_arr[0].split(''))
      }
      if(after_arr[1]){
        setDecimalArray(after_arr[1].split(''))
      }else {
        setDecimalArray([])
      }
    }, delay);
  },[])
  return (
    <View className="num-comp" style={{fontSize:pxTransform(size)}}>
      {numArray.map((item, index)=>{
        return (
          <View 
            className='num_block' 
            style={{width: pxTransform(size*0.6), height:pxTransform(size)}}
          >
            <View 
              className="num_box" 
              style={{transform: `translateY(-${item * 10}%)`, transition: `all ${index/2+0.3}s ease-in-out`}}
            >
              <View>0</View>
              <View>1</View>
              <View>2</View>
              <View>3</View>
              <View>4</View>
              <View>5</View>
              <View>6</View>
              <View>7</View>
              <View>8</View>
              <View>9</View>
            </View>
          </View>
        )
      })}
      {decimalArray.length>0 && <View>.</View>}
      {decimalArray.map((item, index)=>{
        return (
          <View 
            className='num_block' 
            style={{width: pxTransform(size*0.6), height:pxTransform(size)}}
          >
            <View 
              className="num_box" 
              style={{transform: `translateY(-${item * 10}%)`, transition: `all ${index/2+0.3}s ease-in-out`}}
            >
              <View>0</View>
              <View>1</View>
              <View>2</View>
              <View>3</View>
              <View>4</View>
              <View>5</View>
              <View>6</View>
              <View>7</View>
              <View>8</View>
              <View>9</View>
            </View>
          </View>
        )
      })}
    </View>
  )
}
export default  Num
