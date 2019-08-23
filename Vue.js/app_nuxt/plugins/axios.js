export default ({store, app: {$axios}, redirect}) => {

  $axios.onRequest(request => {
    console.log('request', request)
  })

  $axios.onResponse(response => {
    console.log('response', response)
  })

  $axios.onError(function (error) {
    console.log('error.response.data', error.response.data)
  })
}
