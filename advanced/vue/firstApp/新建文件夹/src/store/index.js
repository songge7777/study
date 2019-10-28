import Vue from 'vue'
import vuex from 'vuex' 
import one from './modules/one'
import two from './modules/two'
Vue.use(vuex);

export default new vuex.Store({
  modules: {
    one,
    two
  }
})