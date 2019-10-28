

const state = {
  count:0
}

const mutations = {
  increment (state,props) {
    console.log(state,props)
    state.count++
  }
}

export default{
  state,
  mutations
}