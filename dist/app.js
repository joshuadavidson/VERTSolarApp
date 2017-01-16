/* establish global variables for ESLint */
/* global angular document */
/* global $locationProvider document */
/* global $routeProvider document */

angular.module('vertApp', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
  // use HTML5 History to remove the # in URLs
  $locationProvider.html5Mode(true);

  // setup URL routes
  $routeProvider
  .when('/', {
    templateUrl: './templates/home.html',
  })

  .when('/layout', {
    templateUrl: './templates/layout.html',
  })

  .when('/whatif', {
    templateUrl: './templates/whatif.html',
  })

  .when('/icon', {
    templateUrl: './templates/icon.html',
  });
}]);
