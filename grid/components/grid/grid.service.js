(function() {
  angular
    .module('mz.components.grid.service', [])
    .factory('GridService', GridService);

    GridService.$inject = [];

    function GridService() {
      var _cellIds = null;
      var _colerrdCells = [];

      var service = {
        game: {
          rows: [1,2,3,4],
          columns: [1,2,3,4]
        },
        getRandomColeredCellIds: getRandomColeredCellIds,
        removeColoredCellById: removeColoredCellById
      };

      _cellIds = _getCellIds();

      return service;
      
      function getRandomColeredCellIds(count) {

      }

      function removeColoredCellById() {

      }

      function _getCellIds() {
        for(var r = 0; r < service.game.rows; r++) {
          for(var c = 0; c < service.game.columns; c++) {
            ids.push('c-' + r + c);
          }
        }
      }
    }
})();
