export const state = () => ({
  books: {}
})

export const mutations = {
  setBooks: (state, data) => {
    state.books = data
  }
}
