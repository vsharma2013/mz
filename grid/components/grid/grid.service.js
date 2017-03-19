(function() {
  angular
    .module('mz.components.grid.service', [])
    .factory('GridService', GridService);

    GridService.$inject = [];

    function GridService() {
      var _cellIds = null;
      var _coleredCells = [];

      var service = {
        game: {
          rows: [1,2,3,4],
          columns: [1,2,3,4]
        },
        start: start,
        isCellColored: isCellColored,
        removeColoredCell: removeColoredCell
      };

      _cellIds = _getCellIds();

      return service;
      
      function start() {
        _coleredCells = getRandomColeredCellIds();
      }

      function isCellColored(cellId) {
        if (_.isEmpty(_coleredCells)) {return false;}

        return _.find(_coleredCells, function(c) { return c === cellId;} ) ? true : false;
      }

      function removeColoredCell(cellId) {
        _coleredCells = _.reject(_coleredCells, function(c) {return c === cellId;});
      }

      function getRandomColeredCellIds(count) {
        return ['c-00', 'c-11', 'c-22', 'c-33', 'c-03'];
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
