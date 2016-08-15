// testBoard2.js
(function () {
    "use strict";

    var testBoard2 = {
        id: 2,
        name: 'Helix',
        selectedCell: null,
        rows: [
            {
                cells: [
                    {
                        id: "A1",
                        width: 4,
                        height: 5,
                        color: "lightgreen"
                    },
                    {
                        id: "A2",
                        cells: [
                            {
                                id: "A21",
                                width: 4,
                                height: 1,
                                color: "lightgreen"
                            },
                            {
                                id: "A22",
                                width: 4,
                                height: 1,
                                color: "yellow"
                            },
                            {
                                id: "A23",
                                width: 4,
                                height: 1,
                                color: "lightgreen"
                            },
                            {
                                id: "A24",
                                width: 4,
                                height: 1,
                                color: "lightgreen"
                            },
                            {
                                id: "A25",
                                width: 4,
                                height: 1,
                                color: "lightgreen"
                            },
                        ]
                    }

                ]
            },
            {
                cells: [
                    {
                        id: "B1",
                        width: 8,
                        height: 4,
                        color: "lightgreen"
                    },
                ]
            },
            {
                cells: [
                    {
                        id: "C1",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "C2",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "C3",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "C4",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "D1",
                        width: 1,
                        height: 5,
                        color: "red"
                    },
                    {
                        id: "D2",
                        width: 7,
                        height: 5,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "E1",
                        width: 3,
                        height: 4,
                        color: "lightgreen"
                    },
                    {
                        cells: [
                            {
                                id: "E21",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            },
                            {
                                id: "E22",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                id: "E31",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            },
                            {
                                id: "E32",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                id: "E41",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            },
                        ]
                    },
                    {
                        cells: [
                            {
                                id: "E51",
                                width: 1,
                                height: 2,
                                color: "lightgreen"
                            },
                        ]
                    },
                ]
            }
        ]

    }


    var module = angular.module("cellBoardApp");
    module.value("testBoard2", testBoard2);
})();
