import Taro from '@tarojs/taro'
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
// import createLoading from 'dva-loading';
import immer from 'dva-immer';
let app
let store
let dispatch
let registered

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()]
  app = create(opt)
  app.use(immer())

  if (!registered) opt.models.forEach(model => app.model(model))
  registered = true
  app.start()

  store = app._store
  app.getStore = () => store
  app.use({
    onError(err) {
      if(err.code!=10005){
        Taro.showToast({
          icon: 'none',
          title: err.msg
        })
      }else {
        store.dispatch({type:'common/save',payload: {
          isLogin: false
        }})
        Taro.removeStorageSync('token')
      }
    },
  })

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}
