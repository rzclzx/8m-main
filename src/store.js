import Vue from 'vue'
import Vuex from 'vuex'
import MarketApi from './server/index'

Vue.use(Vuex)
const actions = {
  state: {
    contractList: null,
    swapTicker: null
  },
  mutations: {
    SAVE_TICKER (state, payload) {
      state[payload.type] = payload.ticker
    }
  },
  actions: {
    getSwapAllTicker (context) {
      debugger
      return MarketApi.getSwapAllTicker()
        .then(res => {
          let ticker = {}
          res.data['ticker_all'].map(item => {
            ticker[item.productId] = item
          })
          context.commit('SAVE_TICKER', {
            type: 'swapTicker',
            ticker: ticker
          })
          return res
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getContractList (context) {
      return MarketApi.getContractList()
        .then(res => {
          let ticker = []
          ticker = res.data.contractList
          context.commit('SAVE_TICKER', {
            type: 'contractList',
            ticker: ticker
          })
        })
    },
  }
}
export default actions
