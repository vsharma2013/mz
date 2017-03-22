(function(){
  'use strict';
  angular
  .module('mz.components.dummyModule', [])
  .controller('dummyController', dummyController);

  dummyController.$inject = ['$scope', 'GridService'];

  function dummyController($scope, gridService) {
    $scope.gridService = gridService;

    $scope.$watch('gridService.modifiedAt', function(newVal, oldVal) {
      if((newVal - oldVal)  > 100)
        console.log(arguments);
    });
  }
})();
