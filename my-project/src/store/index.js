import Vue from "vue"
import Vuex from  "vuex"
//引入store子模块
import home from "./modules/index";
import addText from "./modules/addText"
import selectSite from "./modules/selectSite"
Vue.use(Vuex)

export default  new Vuex.Store({
    modules:{
       home,
       addText,
       selectSite
    },
    plugins:[]
})