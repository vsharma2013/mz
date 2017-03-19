(function() {
  angular
    .module('mz.components.grid.controller', [])
    .controller('GridController', GridController);

    GridController.$inject = ['$scope', 'GridService'];

    function GridController($scope, gridService) {
      var vm = this;
      vm.game = gridService.game;
      vm.coloredCellCount = null;

      vm.start = function() {
        gridService.start();
        vm.coloredCellCount = gridService.getColoredCells().length;
      };

      vm.isCellColored = function(row, col) {
        return gridService.isCellColored(row, col);
      };

      vm.removeColor = function(row, col) {
        gridService.removeColoredCell(row, col);
        vm.coloredCellCount = gridService.getColoredCells().length;
      };
    }
})();
