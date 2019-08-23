export const state = () => ({
  userData: {},
  lang: 'en',
  tokenIsRefreshing: false
});

export const getters = {
  getUserData: state => {
    return state.userData
  },
  getUserLang: state => {
    return state.lang
  }
}

export const mutations = {
  setUserData(state, userData) {
    state.userData = userData
    this.$axios.setToken(userData.api_token, 'Bearer');
  },
  setUserLang: (state, lang) => {
    state.lang = lang
  },
  setTokenIsRefreshing(state, status) {
    state.tokenIsRefreshing = status
  }
}

export const actions = {

  signUp({commit, dispatch}, authData) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/register', authData)
        .then((data) => {
            if (data.item) {
              const message = !data.item.status ? 'You have successfully registered in the system. Your email is not verified' : false;
              commit('setUserData', data.item);
              commit('notifications/setSuccessMessage', message, {root: true});
              this.$router.push('/cabinet');
              commit('notifications/setNotificationStatus', true, {root: true});
            }
            // resolve(data);
          },
          (error) => {
          }
        )
    });
  },

  signIn({commit, dispatch}, authData) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/login', authData)
        .then((data) => {
          if (data.item) {
            const message = !data.item.status ? 'Your email is not verified' : false;
            commit('setUserData', data.item)
            this.$router.push('/cabinet');

            if(message) {
              commit('notifications/setSuccessMessage', message, {root: true});
              commit('notifications/setNotificationStatus', true, {root: true});
            }
          }
          resolve(data);
        })
        .catch((error) => {

        })
    });
  },

  signOut({commit, dispatch}, request = true) {
    return new Promise((resolve, reject) => {
      if (request) {
        this.$axios.$post('/logout')
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
          })
      }
      commit('setUserData', {})
      this.$router.push('/login');
    });
  },

  forgotPassword({commit, dispatch}, authData) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/forgotpassword', authData)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {

        })
    });
  },

  setNewPassword({commit, dispatch}, authData) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/setnewpassword', authData)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          this.$router.push('/reset-password');
        })
    });
  }
};
