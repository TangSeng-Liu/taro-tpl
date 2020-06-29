import Taro, { pxTransform } from '@tarojs/taro';
import { View,Text, Image } from '@tarojs/components'
import { Img } from '@/components'
import GoodsCard from '@/types/goodsCard'

import './index.less'
interface cutGoods extends GoodsCard{
  /**
   * Tag插槽
   */
  renderTag?: any,
  /**
   * 价格插槽
   */
  renderPrice?: any,
  /**
   * 右边操作栏插槽
   */
  children?: any,
  /**
   * 图片左上角标签
   */
  imgTag?: string
  /**
   * 标题前图标
   */
  titleIcoin?: string,
  /**
   * 反排
   */
  reverse?: boolean,
  /**
   * 边框圆角
   */
  radius?: number,
  /**
   * 图片圆角
   */
  imgRadius?: string
  space?:string
}
/**
 * 横向排布商品卡片
 */
function RowGoods({imgWidth=250, imgHeight=250, title, imgUrl, imgTag,
  reverse=false, radius=12, imgRadius='0', renderTag, titleIcoin,space='20rpx 18rpx',
  renderPrice, onClick, titleLine=2, children}:cutGoods){ 
  return (
    <View 
      className='row-comp' 
      style={{flexDirection: reverse?'row-reverse':'row', borderRadius: pxTransform(radius)}} 
      onClick={()=>{
        onClick && onClick()
      }}
    >
      <View className='image_box' style={{width: pxTransform(imgWidth), height: pxTransform(imgHeight)}}>
        {!!imgUrl && <Img radius={imgRadius} width={imgWidth} height={imgHeight} src={ imgUrl }/>}
        {imgTag && <View className='imgTag'>{imgTag}</View>}
      </View>
      <View className='goods_info' style={{margin: space}}>
        <View className={`title_box ${titleIcoin?'bg':''}`} style={{backgroundImage: `url(${titleIcoin || ''})`}}>
          <View className='title' style={`-webkit-line-clamp:${titleLine}`}>{title}</View>
        </View>
        <View className='tag_box'>{renderTag}</View>
        { renderPrice }
      </View>
      {children}
    </View>
  )
}
export default RowGoods