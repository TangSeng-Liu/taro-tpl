import Taro, { pxTransform } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';
import { AtIcon } from 'taro-ui'
interface chekcBoxType {
  /**
   * 是否选中
   * @default false
   */
  selected: boolean,
  /**
   * 大小
   * @default 40
   */
  size?: number,
  /**
   * 颜色
   * @default #41A89C
   */
  color?: string,
  /**
   * 点击事件
   */
  onClick?: (e) => any
}
function Check ({selected = false, size = 40,color='#41A89C', onClick}: chekcBoxType) {
  function clickBox(e){
    e.stopPropagation()
    onClick && onClick(e)
  }
  return (
    <View className="Check-comp" onClick={clickBox}>
      <View 
        style={`
          width: ${pxTransform(size)}; 
          min-width: ${pxTransform(size)};
          height: ${pxTransform(size)};
          background-color: ${selected?color:''}; 
        `} 
        className={`at-checkbox__icon-cnt ${selected?'at-checkbox__option--selected':''}`}
      >
        <Text className='at-icon at-icon-check'></Text>
      </View> 
    </View>
  )
}
export default  Check
