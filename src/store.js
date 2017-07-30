import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const banner1={
	state:{
		data:{
			picAd1:false,
			showModule:false,
			bannerPic:{
				a:null,
				b:null
			}
		}
		
	},
	mutations:{
		showPicAd1(state){
			state.data.picAd1=true;
		},
		delThis1(state){
			state.data.picAd1=false;
		},
		module(state){
			state.data.showModule=true;
		},
		setPic(state,url){
			state.data.bannerPic.a=url;
		}
	},
	actions:{
		showPicAd1(context){
			context.commit('showPicAd1');
		},
		delThis1(context){
			context.commit('delThis1')
		},
		module(context){
			context.commit('module')
		},
		setPic(context,url){
			context.commit('setPic',url)
		}
	}
}
const store = new Vuex.Store({
	modules: {
		banner1:banner1
	}
})

export default store
