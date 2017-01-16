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
    }],
  });
}());
