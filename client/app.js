(function(){
  angular.module('jupitr', [
    'jupitr.services',
    'jupitr.login',
    // 'jupitr.home',
    'jupitr.profile',
    'jupitr.auth'
  ])
  .config(function($routeProvider){ // need to add $httpProvider?
    $routeProvider
      .when('/login', {
        templateURL: 'app/login/login.html',
        controller: 'LoginController'
      });
      // .when('/home', {
      //   templateURL: '',
      //   controller: ''
      // });
      .when('/profile', {
        templateURL: 'app/profile/profile.html',
        controller: 'profileController',
        authenticate: true
      });
      .otherwise({
        // redirectTo: '/home'
      });
    // Need to add $httpProvider.interceptors.push('AttachTokens');?
  })
  .factory('', function(){ // factory to attach tokens?

  })
  .run(function(){
    
  });

})();
