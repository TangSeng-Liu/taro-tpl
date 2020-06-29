import Taro, { useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Img } from '@/components'
import classNames from 'classnames'
import GoodsCard from '@/types/goodsCard'
import './index.less'
interface columnGoodsType extends GoodsCard{
  children?:any,
  /**
   * 是否开启阴影
   */
  shadow?: boolean
}
function ColumnGoods({
  imgWidth=338, 
  imgHeight=338, 
  title, 
  imgUrl, 
  titleLine=1,
  onClick,
  children,
  shadow=true
}:columnGoodsType){
  function tap(){
    onClick && onClick()
  }
  // 图片及图片容器高宽
  const width = Taro.pxTransform(imgWidth)
  const height = Taro.pxTransform(imgHeight)
  return (
    <View 
      className={classNames(shadow?'shadow':'', 'columnGoods-comp')}
      hoverClass='block_active'
      style={{ width: width }}
      onClick={tap}
    >
      <View className='img_box' style={{ width: width, height: height }}>
       {!!imgUrl && <Img width={imgWidth} height={imgHeight} src={imgUrl}/>} 
      </View>
      <View className='content_box'>
        <View className='title' style={`-webkit-line-clamp:${titleLine}`}>{ title }</View>
        {children}
      </View>
    </View>
  )
}
export default ColumnGoods