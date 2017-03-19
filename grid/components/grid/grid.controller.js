(function() {
  angular
    .module('grid.controller', [])
    .controller('GridController', GridController);

    GridController.$inject = ['$scope', 'GridService'];

    function GridController($scope, GridService) {
      var vm = this;
      
    }
})();
