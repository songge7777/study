import Vue from 'vue'
import vuex from 'vuex' 
import one from './modules/one'
import two from './modules/two'
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    'Apps':one,
    two
  },
  plugins: [
    //createPersistedState 不放任何參數 vuex数据刷新 不会消失
    //storage: window.sessionStorage vuex数据跟sessionStorage 关联起来
    createPersistedState({
      storage: window.sessionStorage
      // storage:
      //   {
      //     getItem: key => sessionStorage.get(key),
      //     // // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      //     // setItem: (key, value) =>
      //     // sessionStorage.set(key, value, { expires: 3, secure: true }),
      //     // removeItem: key => sessionStorage.remove(key),
      //   }

    })
  ]
})