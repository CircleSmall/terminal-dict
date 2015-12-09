    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_getTr": function(dataArray) {
                    var dataString = "";
                    dataArray.forEach(function(element, index, array) {
                        dataString += element.tr.l.i;
                    });
                    return dataString;
                }
            });
            return tpHelper.vm([ [ {
                "type": "macro",
                "id": "list",
                "args": [ {
                    "type": "references",
                    "id": "count",
                    "leader": "$"
                } ],
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 19
                }
            }, "    ", [ {
                "type": "foreach",
                "to": "phr",
                "from": {
                    "type": "references",
                    "id": "phrs",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 4,
                    "last_column": 27
                }
            }, "", [ {
                "type": "if",
                "condition": {
                    "type": "math",
                    "expression": [ {
                        "type": "math",
                        "expression": [ {
                            "type": "references",
                            "id": "foreach",
                            "path": [ {
                                "type": "property",
                                "id": "count"
                            } ],
                            "isWraped": true,
                            "leader": "$"
                        }, {
                            "type": "references",
                            "id": "count",
                            "leader": "$"
                        } ],
                        "operator": "<"
                    }, {
                        "type": "math",
                        "expression": [ {
                            "type": "references",
                            "id": "foreach",
                            "path": [ {
                                "type": "property",
                                "id": "count"
                            } ],
                            "isWraped": true,
                            "leader": "$"
                        }, {
                            "type": "references",
                            "id": "count",
                            "leader": "$"
                        } ],
                        "operator": "=="
                    } ],
                    "operator": "||"
                },
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 8,
                    "last_column": 69
                }
            }, "            ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "tphr",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "phr",
                    "path": [ {
                        "type": "property",
                        "id": "phr"
                    } ],
                    "leader": "$"
                } ],
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 12,
                    "last_column": 32
                }
            }, "", {
                "type": "references",
                "id": "tphr",
                "path": [ {
                    "type": "property",
                    "id": "headword"
                }, {
                    "type": "property",
                    "id": "l"
                }, {
                    "type": "property",
                    "id": "i"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 26
                }
            }, " ", {
                "type": "references",
                "id": "_getTr",
                "leader": "$",
                "args": [ {
                    "type": "references",
                    "id": "tphr",
                    "path": [ {
                        "type": "property",
                        "id": "trs"
                    } ],
                    "leader": "$"
                } ],
                "prue": true,
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 27,
                    "last_column": 45
                }
            }, "", "</br>" ], "" ], "" ], "", {
                "type": "macro_call",
                "id": "list",
                "args": [ {
                    "type": "integer",
                    "value": "3"
                } ],
                "pos": {
                    "first_line": 11,
                    "last_line": 11,
                    "first_column": 0,
                    "last_column": 8
                }
            }, "" ]).render(_data);
        },
        "init":         function init() {}
    };
