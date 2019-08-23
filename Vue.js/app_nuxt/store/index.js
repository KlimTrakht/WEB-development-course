export const state = () => ({
  pageTitle: '',
  user: {}
});


export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  },
  setUser(state, user) {
    state.user= user
  }
};

export const actions = {
  setPageTitle(vuexContext, title) {
    vuexContext.commit("setPageTitle", title);
  },

  // nuxtServerInit ({ commit }, { req }) {
  //     if (req) {
  //       console.log('req.session.user', req)
  //       commit('setUser', {name: 'John'})
  //     }
  // }
};

export const getters = {
  getPageTitle(state) {
    return state.pageTitle;
  }
};
