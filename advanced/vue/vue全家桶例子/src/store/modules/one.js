

const state = {
  count:0
}
const getters={
  getCount11:state=>{
    return state.count
  },
  isAdmin11() { 
    console.log('11111111111')
  }
}
const mutations = {
  increment (state) {
    state.count++
    console.log(state.count)

  },
  decrement (state,data) {
    state.count--
    console.log(state.count,data)
  }
}

const actions = {
  isAdmin123 (context) { 
    context.commit("increment")
    console.log('------------actions')
  },
  increment(context) {//这儿做异步
    setTimeout(() => {
      context.commit("increment");
    }, 1000)
  },
  decrement(context) {
      context.commit("decrement");
  }
}

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}