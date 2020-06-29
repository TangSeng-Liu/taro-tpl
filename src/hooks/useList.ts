import { useState, useEffect, useReachBottom, useRef } from '@tarojs/taro';
/**
 * 列表钩子
 * 三个返回值【完整数组，更新数组方法，重置数组方法】
 * @param callBackFun 执行方法
 * @param newList 最新的数组内容
 * @param pageSize 每页的条数
 */
export default function useList(callBackFun, newList, pageSize=20, isfirst = true){
  const [pageNo, setPageNo] = useState(1)
  const [list, setList] = useState<any>([])
  const [finished, setFinished] = useState(false)
  const ListRef = useRef<any>([])
  function resetList(){
    setPageNo(1)
    ListRef.current = []
    setFinished(false)
    callBackFun(1)
  }
  useEffect(()=>{
    if(isfirst){
      callBackFun(pageNo)
    }
  },[])
  useReachBottom(()=>{
    bottomBack()
  })
  function bottomBack(){
    if(!finished){
      callBackFun(pageNo)
    }
  }
  useEffect(()=>{
    if(!finished){
      if(newList && newList.length> 0){
        ListRef.current = [...ListRef.current, ...newList]
        setList([...ListRef.current])
        setPageNo(pageNo+1)
        setFinished(newList.length < pageSize)
      }else {
        if(pageNo==1){
          ListRef.current = []
          setList([])
        }else {
          setFinished(false)
        }
      }
    }
  },[newList])
  return [list, setList, resetList, bottomBack]
}