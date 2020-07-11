import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = () =>
//   new Vuex.Store({
//     state: {
//       inputs: {
//         orderId: '',
//         fullname: '',
//         email: '',
//         review: '',
//         address: '',
//         phone: '',
//         state: '',
//       },
//     },
//     mutations: {
//       input(state, payload) {
//         state.input = payload
//       },
//       setInput(state, payload) {
//         state.inputs[payload.field] = payload.data
//       },
//     },
//   })

// export default store

// export const state = () => ({
//   inputs: {
//     orderId: '',
//     fullname: '',
//     email: '',
//     review: '',
//     address: '',
//     phone: '',
//     state: '',
//   },
// })

// export const getters = {
//   inputs(state) {
//     return state.inputs
//   },
//   orderId(state) {
//     return state.orderId
//   },
//   fullname(state) {
//     return state.fullname
//   },
//   email(state) {
//     return state.email
//   },
//   review(state) {
//     return state.review
//   },
//   address(state) {
//     return state.address
//   },
//   phone(state) {
//     return state.phone
//   },
//   state(state) {
//     return state.state
//   },
// }

// export const mutations = {
//   input(state, payload) {
//     state.input = payload
//   },
//   setInput(state, payload) {
//     state.inputs[payload.field] = payload.data
//   },
// }

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
          address: '',
          phone: '',
          state: '',
        },
      },
      mutations: {
        input(state, payload) {
          state.input = payload
        },
        setInput(state, payload) {
          state.inputs[payload.field] = payload.data
        },
      },
    }))
  )
}

export default initStore
