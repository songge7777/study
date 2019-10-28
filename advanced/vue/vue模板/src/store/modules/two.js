

const state = {
  price:0
}
const getters={
  getCount:state=>{
    return state.price
  },
  isAdmin () { 
    console.log('11111111111')
    return 'isA'
  }
}
const mutations = {
  add (state,props) {
      state.price++
      console.log(state,props)
  },

  sssss (state,props) {
    state.price++
    console.log(state.price,props)

  },
  aaaaaaa (state) {
    state.price--
    console.log(state.price)

  }
}
function getData (data){
  return Promise.resolve(data)
}
const actions = {
  isAdmin123 (context,props) { 
    context.commit()
    console.log('11111111111',state,props)
  },
  async increment ({ commit },data) {
    commit('add', await getData(data))
  },
  decrement(context) {
      context.commit("decrement");
  }
}
export default{
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}