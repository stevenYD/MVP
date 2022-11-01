import Vue from "vue";
import Vuex from "vuex";
//引入mudles下所有文件，集中管理vuex文件
import user from  './modules/user.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
  },
  //是否开启严格模式
  strict:process.env.NODE_ENV !== 'production',
})