export default  function (context) {

  console.log('path: ', context.route.path);

  if(context.route.path === '/cabinet'){
    context.redirect('/')
  }

}
