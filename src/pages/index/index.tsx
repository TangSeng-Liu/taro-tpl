import Taro, { useState } from '@tarojs/taro'
import { useDispatch, useSelector } from '@tarojs/redux';
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.less'

export default function Index(){
  const dispatch = useDispatch()
  const { content } = useSelector<any, any>(state => state)
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
  function handleClick(value){
    setCurrent(value)
  }
  return (
    <View className='page-index'>
      <Text>Hello world!{content}</Text>
      <AtTabs current={current} tabList={tabList} onClick={handleClick.bind(this)}>
        <AtTabsPane current={current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
Index.Config = {
  navigationBarTitleText: '首页'
}
