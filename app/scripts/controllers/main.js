// main.js
(function () {
  'use strict';

    var mainController = function ($scope, testBoard1, testBoard2, testBoard3, testBoard4) {
        $scope.cellBoardList = null;
        $scope.selectedCellBoard = null;

        $scope.init = function() {
          $scope.cellBoardList = [
            angular.copy(testBoard1),
            angular.copy(testBoard2),
            angular.copy(testBoard3),
            angular.copy(testBoard4)
          ];
          for (var i = 0; i < 4; i++) {
            $scope.cellBoardList[i].rowsTemplate =
              angular.copy($scope.cellBoardList[i].rows)
          }
          $scope.selectedCellBoard = $scope.cellBoardList[0];
        }

        $scope.init();

        $scope.changeColor = function () {
            var cellBoard = $scope.selectedCellBoard;
            var color = "lightgreen";
            switch (cellBoard.selectedCell.color) {
                case "lightgreen":
                    color = "yellow";
                    break;
                case "yellow":
                    color = "red";
                    break;
                case "red":
                    color = "gray";
                    break;
                case "gray":
                    color = "lightgreen";
                    break;
            }
            cellBoard.selectedCell.color = color;
        }

        var findInCells = function (source, id) {
            for (var i = 0; i < source.cells.length; i++) {
                var cell = source.cells[i];
                if (cell.cells) {
                    var result = findInCells(cell, id);
                    if (result) {
                        return result;
                    }
                } else {
                    if (cell.id === id) {
                        return cell;
                    }
                }
            }
            return null;
        }

        var findRowIndex = function (rows, cellId) {
            for (var i = 0; i < rows.length; i++) {
                var result = findInCells(rows[i], cellId);
                if (result) {
                    return i;
                }
            }
            return -1;
        }

        $scope.deleteRow = function () {
            var cellBoard = $scope.selectedCellBoard;
            var rowIndex = findRowIndex(cellBoard.rows,
                cellBoard.selectedCell.id);
            cellBoard.selectedCell = null;
            cellBoard.rows.splice(rowIndex, 1);
        }

        $scope.getNewRowCode = function (cellBoard) {
            var startCharCode = (cellBoard.rows.length + 65) % 128;
            var prefix = Math.floor((cellBoard.rows.length + 65) / 128);
            if (prefix === 0) {
                prefix = "";
            }
            else {
                prefix = String.fromCharCode(prefix + 64);
            }
            var result = "";
            for (var i = 0; i < 100; i++) {
                result = prefix + String.fromCharCode(startCharCode + i);
                if (findRowIndex(cellBoard.rows,
                     result + "1") === -1) {
                    break;
                }
            }
            return result;
        }

        $scope.addRowByTemplate = function (cellBoard, rowTemplate) {
            var newRow = angular.copy(rowTemplate);
            var rowCode = $scope.getNewRowCode(cellBoard);
            for (var i = 0; i < newRow.cells.length; i++) {
                var cell = newRow.cells[i];
                cell.id = rowCode + (i + 1);
                if (cell.cells) {
                    for (var j = 0; j < cell.cells.length; j++) {
                        cell.cells[j].id = cell.id + (j + 1);
                    }
                }
            }
            cellBoard.rows.push(newRow);
        }

        $scope.addRows = function () {
            var cellBoard = $scope.selectedCellBoard;
            var rowsTemplate = cellBoard.rowsTemplate;
            for (var k = 0; k < rowsTemplate.length; k++) {
                $scope.addRowByTemplate(cellBoard, rowsTemplate[k]);
            }
        }

        $scope.duplicateRow = function () {
            var cellBoard = $scope.selectedCellBoard;
            var rowIndex = findRowIndex(cellBoard.rows,
                cellBoard.selectedCell.id);
            $scope.addRowByTemplate(cellBoard, cellBoard.rows[rowIndex]);
        }
    };

    mainController.$inject = ["$scope", "testBoard1", "testBoard2", "testBoard3", "testBoard4"];

    var module = angular.module("cellBoardApp");
    module.controller("mainController", mainController);

})();
