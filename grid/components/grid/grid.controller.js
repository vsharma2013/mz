(function() {
  angular
    .module('mz.components.grid.controller', [])
    .controller('GridController', GridController);

    GridController.$inject = ['$scope', '$interval', 'GridService'];

    function GridController($scope, $interval, gridService) {
      var vm = this;
      vm.game = gridService.game;
      vm.coloredCellCount = null;
      vm.timeRemaining = null;
      vm.allowedClicks = false;
      vm.lives = 0;
      vm.interval = null;

      vm.start = function() {
        gridService.start();
        vm.coloredCellCount = gridService.getColoredCells().length;
        vm.timeRemaining = vm.coloredCellCount - 1;
        vm.interval = $interval(function() {
          --vm.timeRemaining;
          if(vm.timeRemaining === 0) {
            vm.allowedClicks = 3;
            $interval.cancel(vm.interval);
          }
        }, 1000);
      };

      vm.isCellColored = function(row, col) {
        return gridService.isCellColored(row, col);
      };

      vm.removeColor = function(row, col) {
        if(vm.timeRemaining === 0 && vm.allowedClicks <= 3) {
          --vm.allowedClicks;
          if(vm.allowedClicks < 0) {
            ++vm.lives;
            vm.start();
            return;
          }
        }

        gridService.removeColoredCell(row, col);
        vm.coloredCellCount = gridService.getColoredCells().length;
      };
    }
})();
