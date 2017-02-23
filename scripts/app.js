angular
  .module("ngOne", ["ngMaterial"]) // the second argument is an array of module that these module depend on
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');
  })
  .directive("helloWorld", function() {  // Directive crash course This is Difining of directive..
    return {   // definition of the directive
      template:   "<h1>{{ messege }}</h1>"
    }
  });
