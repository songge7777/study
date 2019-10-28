

const state = {
  price:0
}

const mutations = {
  add (state,props) {
    console.log(state,props)
    state.price++
  }
}

export default{
  state,
  mutations
}