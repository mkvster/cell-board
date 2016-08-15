// testBoard4.js
(function () {
    "use strict";

    var cellNormalColor = "lightgreen";

    var addModuloRowCell = function (list, cellid, logWidth, logHeight) {
        list.push({
            id: cellid,
            width: logWidth,
            height: logHeight,
            color: cellNormalColor
        });
    }

    var createModuloSameWidthRow = function (prefix, count, logWidth, logHeight) {
        var pod = { cells: [] };
        for (var i = 0; i < count; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), logWidth, logHeight);
        }
        return pod;
    }

    var createModuloPodRow_XL_1x1 = function (prefix) {
        return createModuloSameWidthRow(prefix, 9, 1, 1);
    }

    var createModuloPodRow_XL_3x2 = function (prefix) {
        return createModuloSameWidthRow(prefix, 3, 3, 2);
    }

    var createModuloPodRow_XL_3x1 = function (prefix) {
        return createModuloSameWidthRow(prefix, 3, 3, 1);
    }

    var createModuloPodRow_XL_2x1 = function (prefix) {
        var pod = { cells: [] };
        for (var i = 0; i < 4; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), 2, 2);
        }
        var col = { cells: [] };
        for (var j = 0; j < 2; j++) {
            addModuloRowCell(col.cells, prefix + (i + j + 1), 1, 1);
        }
        pod.cells.push(col)
        return pod;
    }

    var createModuloPodRow_XL_Mix21 = function (prefix) {
        var pod = { cells: [] };
        for (var i = 0; i < 3; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), 2, 1);
        }
        for (var i = 3; i < 6; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), 1, 1);
        }
        return pod;
    }

    var createModuloPodRow_XL_Mix21a = function (prefix) {
        var pod = { cells: [] };
        for (var i = 0; i < 4; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), 2, 1);
        }
        for (var i = 4; i < 5; i++) {
            addModuloRowCell(pod.cells, prefix + (i + 1), 1, 1);
        }
        return pod;
    }

    var testBoard4 = {
        id: 4,
        name: 'Modulo XL',
        selectedCell: null,
        rows: []
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

    var findCell = function (rows, id) {
        for (var i = 0; i < rows.length; i++) {
            var result = findInCells(rows[i], id);
            if (result) {
                return result;
            }
        }
        return null;
    }


    var populateTestBoard4 = function () {

        var charCodeStart = 65;
        for (var i = 0; i < 2; i++) {
            testBoard4.rows.push(createModuloPodRow_XL_3x2(
                String.fromCharCode(i + charCodeStart)));
        }
        for (var i = 2; i < 6; i++) {
            testBoard4.rows.push(createModuloPodRow_XL_Mix21(
                String.fromCharCode(i + charCodeStart)));
        }
        for (var i = 6; i < 10; i++) {
            testBoard4.rows.push(createModuloPodRow_XL_Mix21a(
                String.fromCharCode(i + charCodeStart)));
        }
        for (var i = 10; i < 12; i++) {
            testBoard4.rows.push(createModuloPodRow_XL_2x1(
                String.fromCharCode(i + charCodeStart)));
        }
        for (var i = 12; i < 16; i++) {
            testBoard4.rows.push(createModuloPodRow_XL_1x1(
                String.fromCharCode(i + charCodeStart)));
        }

        findCell(testBoard4.rows, "D1").color = "red";
        findCell(testBoard4.rows, "F6").color = "yellow";
        for (var i = 12; i < 16; i++) {
            for (var j = 4; j < 10; j++) {
                var cellId = String.fromCharCode(i + charCodeStart) + j;
                var cell = findCell(testBoard4.rows, cellId);
                if (cell) {
                    cell.color = "gray";
                }
            }
        }
    }();


    var module = angular.module("cellBoardApp");
    module.value("testBoard4", testBoard4);
})();
