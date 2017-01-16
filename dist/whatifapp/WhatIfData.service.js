/* establish global variables for ESLint */
/* global angular document */
/* global $http document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .factory('WhatIfDataSvc', ['$http', function WhatIfDataService($http) {
    const savedData = {
      irr: null,
    };

    const getData = function () {
      return $http.get('https://jwaynedavidson.com/projects/VERTSolar/whatifapp/whatIfData.json')
        .then(response => response.data);
    };

    const saveIRR = function (data) {
      savedData.irr = data;
    };

    return {
      savedData,
      getData,
      saveIRR,
    };
  }]);
}());
