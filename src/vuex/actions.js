export const addPost = function ({ dispatch, state }, post) {
  dispatch('ADD_POST', post)
}
export const deletePost = function ({ dispatch, state }, index) {
  dispatch('DELETE_POST', index)
}
