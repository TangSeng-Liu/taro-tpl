import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

function Discount (porps) {
  return (
    <View className="ciscount-comp">
      {porps.integral &&  
      <View className='ciscount-box integral'>
        <View className='explain'>积分抵</View>
        <View className='money'>￥{porps.integral}</View>
      </View>
      }
      {porps.cashback && 
      <View className='ciscount-box cashback'>
        <View className='explain'>自购返</View>
        <View className='money'>￥{porps.cashback}</View>
      </View>
      }
      {porps.friend && 
      <View className='ciscount-box friend'>
        <View className='explain'>好友返</View>
        <View className='money'>￥{porps.friend}</View>
      </View>
      }
    </View>
  )
}
export default  Discount
