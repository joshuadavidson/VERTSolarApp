/* establish global variables for ESLint */
/* global angular document */
/* global $http document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .factory('WhatIfDataSvc', ['$http', function whatIfDataService($http) {
    const savedData = {
      irr: null,
    };

    const getData = function () {
      return $http.get('./mock/whatIfData.json')
        .then(response => response.data);
    };

    const saveIRR = function (data) {
      savedData.irr = data;
      //return Promise.resolve(data);
    };

    return {
      savedData,
      getData,
      saveIRR,
    };
  }]);
}());
