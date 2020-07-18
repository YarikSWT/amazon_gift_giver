import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store

const initStore = () => {
  return (
    store ||
    (store = new Vuex.Store({
      state: {
        inputs: {
          orderId: '',
          fullname: '',
          email: '',
          review: '',
          address1: '',
          address2: '',
          zip: '',
          city: '',
          phone: '',
          state: '',
          feedKey: '',
          reviewLink: '',
        },
        gifts: [],
      },
      mutations: {
        input(state, payload) {
          state.input = payload
        },
        setInput(state, payload) {
          state.inputs[payload.field] = payload.data
        },
        setGifts(state, payload) {
          state.gifts = payload
        },
      },
    }))
  )
}

export default initStore
