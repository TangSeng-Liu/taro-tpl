import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index.less';
interface modalType{
  /**
   * 显示弹窗
   */
  show: boolean,
  cancelText?: string,
  confirmText?: string,
  onCancel?: any,
  onConfirm?: any,
  onClose?: any,
  children?: any,
  confirmColor?:string
}
function Modal ({show=false, children, cancelText='取消', confirmText='确认', confirmColor='', onCancel, onConfirm, onClose}:modalType) {
  return (
    <AtModal isOpened={show} onCancel={onCancel} onConfirm={onConfirm} onClose={ onClose?onClose:onCancel}>
      <View className='modal_box'>
        <AtModalContent>{children}</AtModalContent>
        <AtModalAction>
          {cancelText && (
            <Button onClick={onCancel}>{cancelText}</Button>
          )}
          {confirmText && (
            <Button style={{color: confirmColor}} onClick={onConfirm}>{confirmText}</Button>
          )}
        </AtModalAction>
      </View>
    </AtModal>
  )
}
export default  Modal
