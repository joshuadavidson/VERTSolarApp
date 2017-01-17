/* establish global variables for ESLint */
/* global angular document */
/* global $http document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .factory('WhatIfDataSvc', ['$http', function WhatIfDataService($http) {
    var savedData = {
      irr: null,
    };

    var getData = function () {
      return $http.get('https://jwaynedavidson.com/projects/VERTSolar/whatifapp/whatIfData.json')
        .then(function (response) {
          return response.data;
        });
    };

    var saveIRR = function (data) {
      savedData.irr = data;
    };

    return {
      savedData: savedData,
      getData: getData,
      saveIRR: saveIRR,
    };
  }]);
}());
