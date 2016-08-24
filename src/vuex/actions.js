export const addPost = function ({ commit, state }, post) {
  commit('ADD_POST', post)
}
export const deletePost = function ({ commit, state }, index) {
  commit('DELETE_POST', index)
}
