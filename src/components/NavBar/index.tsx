import Taro, { useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import "taro-ui/dist/style/components/nav-bar.scss"
import "taro-ui/dist/style/components/icon.scss"
import './index.less'
interface navType{
  /**
   * 标题
   */
  title: string,
  /**
   * 颜色
   */
  color?: string,
  /**
   * 是否带返回按钮
   */
  isBack?: boolean,
  /**
   * 背景颜色
   */
  bgColor?:string,
  /**
   * 是否浮动
   */
  isFix?: boolean,
  /**
   * 后退的按钮的样式
   */
  roundBack?: boolean,
}
function NavBar({ title,bgColor= '#fff', color = '#333', 
isBack = true, isFix=false, roundBack=false }:navType){
  const { statusBarHeight } = useSelector<any, any>(state => state.common)
  function handleClickLeftView(){
    Taro.navigateBack({  delta: 1}).catch(()=>{
      Taro.switchTab({url: '/pages/index/index'})
    })
  }
  return (
    <View className='nav' style={{ height:isFix?0:((statusBarHeight+45)+'px') }}>
      <View className='at-nav-bar at-nav-bar--fixed' 
        style={`padding-top: ${statusBarHeight}px; background-color: ${bgColor}`}>
          {isBack? 
          <View 
            className={`at-nav-bar__left-view ${roundBack?'active':''}`}
            onClick={ handleClickLeftView } 
            style={{color: color}}
          >
            <Text className='at-icon at-icon-chevron-left'></Text>
            <Text className='at-nav-bar__text'></Text>
          </View>
            : <View style={{ height: Taro.pxTransform(88), flex: 2}}></View>
          }
        <View className='at-nav-bar__title' style={{color: color}}>{ title }</View>
        <View className='at-nav-bar__right-view'>
          <View className='at-nav-bar__container'></View>
          <View className='at-nav-bar__container'> </View>
        </View>
      </View>
    </View>
  )
}
export default NavBar