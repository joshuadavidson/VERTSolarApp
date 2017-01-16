/* establish global variables for ESLint */
/* global angular document */

// use IIFE to avoid pollution of global scope
(function () {
  angular.module('vertApp')

  .component('whatIf', {
    templateUrl: 'https://jwaynedavidson.com/projects/VERTSolar/whatifapp/whatIf.component.html',
    controllerAs: 'model',
    controller: ['WhatIfDataSvc', function whatIfCtrl(WhatIfDataSvc) {
      const model = this;

      model.irr = null;

      // when the component is initialized fetch the what-if data
      model.$onInit = function () {
        WhatIfDataSvc.getData().then((data) => {
          model.data = data;
        });
        model.irr = WhatIfDataSvc.savedData.irr;
      };

      // function that takes data from table and saves it to the WhatIfDataSvc
      model.saveData = function (data) {
        WhatIfDataSvc.saveIRR(data);
        model.irr = WhatIfDataSvc.savedData.irr;
      };
    }],
  });
}());
