import Taro, { useState } from '@tarojs/taro';
import { Image, View } from '@tarojs/components';
import classNames from 'classnames'
import { AtIcon } from 'taro-ui'
import './index.less';
interface imgType{
  /**
   * 图片宽
   * @default 338
   */
  width?: number,
  /**
   * 图片宽
   * @default 338
   */
  height?: number,
  /**
   * 图片圆角
   */
  radius?: string | number,
  /**
   * 图片路径
   */
  src: string
}
/**
 * 图片组件
 */
function Img ({ width = 338, height = 338, src, radius }:imgType) {
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  
  function showImg(){
    setShow(true)
    setErr(false)
  }
  function imgError(){
    setErr(true)
    setShow(false)
  }
  const wh = {
    width: Taro.pxTransform(width), 
    height: Taro.pxTransform(height),
    borderRadius: radius
  }
  return (
    <View className={classNames((show || err)?'':'skeleton', 'images')} style={wh}>
      { err && <AtIcon value='alert-circle' size='30' color='#F00'></AtIcon> }
      <Image
        className='img_fadeIn'
        style={{
          ...wh,
          display: show ? 'block' : 'none', 
        }}
        onError={ imgError}
        onLoad={ showImg }
        src= { src }
      />
    </View>
  )
}
export default  Img
