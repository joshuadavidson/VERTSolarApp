/* establish global variables for ESLint */
/* global angular document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .component('navbar', {
    templateUrl: './components/navbar.component.html',
    controllerAs: 'model',
    controller: [function testCtrl() {
      const model = this;

      // isCollapsed toggles when the user selects a link from the navbar menu
      model.isCollapsed = true;

      // Dummy login function
      model.login = function () {
        model.username = 'Test User';
        model.loggedIn = true;
      };

      // Dummy logout function
      model.logout = function () {
        model.loggedIn = false;
        model.username = null;
      };
    }],
  });
}());
