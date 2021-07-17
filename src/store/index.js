import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:false, 
    currentMenu:null,
    tabsList:[{
      path:'/',
      name:'home',
      label:'首页',
      icon:'home'
    }
  ]
},
  mutations: {
    CollapseMenu(state){
      state.isCollapse =!state.isCollapse

    },
    selectMenu (state,val) {
      if(val.name==='home'){
        state.currentMenu=null;
      }else{
        state.currentMenu=val
        let result= state.tabsList.findIndex(item =>item.name ===val.name)
        result === -1 ?state.tabsList.push(val) : ''
      }
  //    val.name === 'home'?(state.currentMenu=null) : (state.currentMenu =val)

    },
  },
  actions: {
  },
  modules: {
  }
})
