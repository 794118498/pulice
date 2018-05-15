import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        host:'http://localhost:9007',
        num: 0
    },
    getters:{
        login(state){
             return state.host+'/users/login'
        },
        money(state,getters){
          console.log(money)
        }
    },
    mutations:{
        addNum(state){
          state.num++;
        }
    },


})
export default store;