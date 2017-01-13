/* establish global variables for ESLint */
/* global angular document */

angular.module('vertApp')

.component('whatIf', {
  templateUrl: './components/whatIf.component.html',
  controllerAs: 'model',
  controller: [function testCtrl() {
    this.message = 'What if component working!';
  }],
});
