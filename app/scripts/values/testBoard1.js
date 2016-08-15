// testBoard1.js
(function () {
    "use strict";

    var testBoard1 = {
        id: 1,
        name: 'Flexible',
        selectedCell: null,
        rows: [
            {
                cells: [
                    {
                        id: "A1",
                        width: 8,
                        height: 2,
                        color: "gray"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "B1",
                        width: 2,
                        height: 1,
                        color: "red"
                    },
                    {
                        id: "B2",
                        width: 2,
                        height: 1,
                        color: "yellow"
                    },
                    {
                        id: "B3",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "B4",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "C1",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "C2",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "C3",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "C4",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "D1",
                        width: 5,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "D2",
                        width: 3,
                        height: 2,
                        color: "yellow"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "E1",
                        width: 3,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "E2POD",
                        width: 5,
                        height: 2,
                        color: "lightgreen",
                        cells: [
                            {
                                id: "E21",
                                width: 5,
                                height: 1,
                                color: "lightgreen"
                            },
                            {
                                id: "E22",
                                width: 5,
                                height: 1,
                                color: "lightgreen"
                            }
                        ]
                    },
                ]
            },
            {
                cells: [
                    {
                        id: "F1",
                        width: 2,
                        height: 3,
                        color: "lightgreen"
                    },
                    {
                        id: "F2",
                        width: 2,
                        height: 3,
                        color: "lightgreen"
                    },
                    {
                        id: "F3",
                        width: 2,
                        height: 3,
                        color: "lightgreen"
                    },
                    {
                        id: "F4",
                        width: 2,
                        height: 3,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "G1",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "G2",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "G3",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "G4",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "H1",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "H2",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "H3",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    },
                    {
                        id: "H4",
                        width: 2,
                        height: 2,
                        color: "lightgreen"
                    }
                ]
            },
            {
                cells: [
                    {
                        id: "I1",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "I2",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "I3",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    },
                    {
                        id: "I4",
                        width: 2,
                        height: 1,
                        color: "lightgreen"
                    }
                ]
            },
        ]

    }


    var module = angular.module("cellBoardApp");
    module.value("testBoard1", testBoard1);
})();
