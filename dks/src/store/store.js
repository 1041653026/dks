import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	num: 0,
  	height: ''
  },
  mutations: {
  	changeHeight(state, height) {
  		state.height = height;
  	},
  	addFood(state, price) {
  		state.num += parseInt(price);
  	},
  	reduceFood(state, price) {
  		state.num -= parseInt(price);
  	}
  },
})
