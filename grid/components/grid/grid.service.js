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
        getColoredCells: function() { return _coleredCells; },
        modifiedAt: Date.now()
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
        var copy = _cellIds.slice(0);
        copy = shuffleArray(copy);
        return [copy.pop(), copy.shift(), copy.pop(), copy.shift(), copy.pop()];
      }

      function getCellId(row, col) {
        return 'c-' + row + col;
      }

      function _getCellIds() {
        var ids = [];
        for(var r = 1; r <= service.game.rows.length; r++) {
          for(var c = 1; c <= service.game.columns.length; c++) {
            ids.push(getCellId(r, c));
          }
        }
        return ids;
      }

      function shuffleArray(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      }
    }
})();
