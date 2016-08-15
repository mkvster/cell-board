// cellBoard.js
(function () {
    "use strict";

    var cellBoardController = ['$scope', function ($scope) {
        $scope.totalWidth = 0;
        $scope.totalHeight = 0;
        $scope.totalRowWidth = 0;
        $scope.totalRowHeights = [];
        $scope.scaleHorizontal = 1;
        $scope.scaleVertical = 1;

        $scope.getBgColor = function (cell) {
            return cell.color;
        }

        $scope.getWidth = function (cell) {
            return parseInt(cell.width) * $scope.scaleHorizontal + "px";
        }

        $scope.getHeight = function (cell) {
            return parseInt(cell.height) * $scope.scaleVertical + "px";
        }

        $scope.isSelectedCell = function (cell) {
            return $scope.ngModel.selectedCell === cell;
        }

        $scope.setSelectedCell = function (cell, event) {
            $scope.ngModel.selectedCell = cell;
            if (cell == null) {
                return;
            }
        }

        var accumulate = function (array) {
            return array.reduce(function (a, b) {
                return a + b;
            }, 0);
        }

        $scope.calculateTotalWidth = function ()
        {
            return Math.max.apply(Math, $scope.ngModel.rows.map(function (row) {
                var cellWidths = row.cells.map(function (cell) {
                    if (cell.width) {
                        return parseInt(cell.width);
                    }
                    else if (cell.cells) {
                        return Math.max.apply(Math, cell.cells.map(function (cell) {
                            return parseInt(cell.width);
                        }));
                    }
                    return 0;
                });
                return accumulate(cellWidths);
            }));
        }

        $scope.calculateTotalHeight = function () {
            $scope.totalRowHeights = $scope.ngModel.rows.map(function (row) {
                return Math.max.apply(Math, row.cells.map(function (cell) {
                    if (cell.height) {
                        return parseInt(cell.height);
                    }
                    else if (cell.cells) {
                        var cellSubHeights = cell.cells.map(function (subcell) {
                            return parseInt(subcell.height);
                        });
                        return accumulate(cellSubHeights);
                    }
                }));
                return 0;
            });
            return accumulate($scope.totalRowHeights);
        }

        $scope.getTotalRowHeight = function (index) {
            return $scope.totalRowHeights[index] * $scope.scaleVertical + "px";
        }

        $scope.resize = function () {
            var w = $scope.calculateTotalWidth();
            $scope.totalRowWidth = w
                * $scope.scaleHorizontal + "px";
            $scope.totalWidth = w
                * $scope.scaleHorizontal + 1 + "px";
            $scope.totalHeight = $scope.calculateTotalHeight()
                * $scope.scaleVertical + 1 + "px";
        }

        $scope.init = function () {
            $scope.scaleHorizontal = $scope.scaleHorizontal || 1;
            $scope.scaleVertical = $scope.scaleVertical || 1;
            $scope.$watch('ngModel.rows.length', $scope.resize);
        }


    }];

    var cellBoard = function ($document) {

        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                scaleHorizontal: '@',
                scaleVertical: '@'
            },
            templateUrl: 'views/cellBoardTmpl.html',
            replace: true,
            require: 'ngModel',
            link: function ($scope, element, attrs) {
                $scope.scaleHorizontal = $scope.$eval(attrs.scaleHorizontal);
                $scope.scaleVertical = $scope.$eval(attrs.scaleVertical);
                $scope.init();
            },
            controller: cellBoardController
        };

    }

    cellBoard.$inject = ["$document"];
    var module = angular.module("cellBoardApp");
    module.directive("cellBoard", cellBoard);
})();
