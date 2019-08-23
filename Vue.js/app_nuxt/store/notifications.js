export const state = () => ({
  errorMessage: '',
  successMessage: '',
  notificationIsEnabled: false
})

export const getters = {

  getErrorMessage: state => {
    return state.errorMessage
  },
  getSuccessMessage: state => {
    return state.successMessage
  },
  getNotificationStatus: state => {
    return state.notificationIsEnabled
  }

}

export const mutations = {

  setErrorMessage: (state, errorMessage) => {
    state.successMessage = '';
    state.errorMessage = errorMessage.error
  },
  unsetErrorMessage: (state) => {
    state.errorMessage = ''
  },
  setSuccessMessage: (state, successMessage) => {
    state.errorMessage = '';
    state.successMessage = successMessage
  },
  unsetSuccessMessage: (state, errorMessage) => {
    state.successMessage = ''
  },
  setNotificationStatus(state, status){
    state.notificationIsEnabled = status
  }
}

export const actions = {

};