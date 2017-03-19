(function() {
  angular
    .module('mz.components.grid.controller', [])
    .controller('GridController', GridController);

    GridController.$inject = ['$scope', 'GridService'];

    function GridController($scope, GridService) {
      var vm = this;
      vm.game = GridService.game;
    }
})();
