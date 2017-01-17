/* establish global variables for ESLint */
/* global angular document */
/* global $http document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .factory('WhatIfDataSvc', ['$http', function WhatIfDataService($http) {
    // Data storage object
    var savedData = {
      irr: null,
    };

    // async call that retrieves data from the backend
    // for demo purposes this is mocked with a .json file
    var getData = function () {
      return $http.get('https://jwaynedavidson.com/projects/VERTSolar/whatifapp/whatIfData.json')
        .then(function (response) {
          return response.data;
        });
    };

    // function that takes data from a component and saves it to the data storage object
    var saveIRR = function (data) {
      savedData.irr = data;
    };

    // Expose service api via the revealing module pattern
    return {
      savedData: savedData,
      getData: getData,
      saveIRR: saveIRR,
    };
  }]);
}());
