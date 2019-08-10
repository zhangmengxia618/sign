import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger'

import home from './modules/home'
import chooseAddress from './modules/chooseAddress'
import addAddress from './modules/addAddress'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    home, chooseAddress, addAddress, user
  },
  plugins:[CreateLogger()]
})