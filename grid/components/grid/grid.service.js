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
        removeColoredCell: removeColoredCell,
        getColoredCells: function() { return _coleredCells; }
      };

      _cellIds = _getCellIds();

      return service;
      
      function start() {
        _coleredCells = getRandomColeredCellIds();
      }

      function isCellColored(row, col) {
        if (_.isEmpty(_coleredCells)) {return false;}

        var cellId =  getCellId(row, col);
        return _.find(_coleredCells, function(c) { return c === cellId;} ) ? true : false;
      }

      function removeColoredCell(row, col) {
        var cellId =  getCellId(row, col);
        _coleredCells = _.reject(_coleredCells, function(c) {return c === cellId;});
      }

      function getRandomColeredCellIds(count) {
        return ['c-11', 'c-22', 'c-33', 'c-44', 'c-14'];
      }

      function getCellId(row, col) {
        return 'c-' + row + col;
      }

      function _getCellIds() {
        for(var r = 1; r <= service.game.rows; r++) {
          for(var c = 1; c <= service.game.columns; c++) {
            ids.push(getCellId(r, c));
          }
        }
      }
    }
})();
