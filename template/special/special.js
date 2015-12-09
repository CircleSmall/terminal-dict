    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_getSpecial": function(data) {
                    return data["trs"][0].tr;
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
            }, "\r\n    ", [ {
                "type": "foreach",
                "to": "perEntrie",
                "from": {
                    "type": "references",
                    "id": "entries",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 4,
                    "last_column": 36
                }
            }, "\r\n        ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "pEntry",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "perEntrie",
                    "path": [ {
                        "type": "property",
                        "id": "entry"
                    } ],
                    "leader": "$"
                } ],
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 8,
                    "last_column": 40
                }
            }, "\r\n        ", [ {
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
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 8,
                    "last_column": 68
                }
            }, "\r\n            ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "special",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "_getSpecial",
                    "leader": "$",
                    "args": [ {
                        "type": "references",
                        "id": "pEntry",
                        "leader": "$"
                    } ]
                } ],
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 12,
                    "last_column": 50
                }
            }, "\r\n            ", {
                "type": "references",
                "id": "pEntry",
                "path": [ {
                    "type": "property",
                    "id": "major"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 12,
                    "last_column": 25
                }
            }, " ", "<b>", {
                "type": "references",
                "id": "special",
                "path": [ {
                    "type": "property",
                    "id": "nat"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 29,
                    "last_column": 41
                }
            }, "<", "/b>\r\n            </br>\r\n            ", [ {
                "type": "if",
                "condition": {
                    "type": "references",
                    "id": "special",
                    "path": [ {
                        "type": "property",
                        "id": "engSent"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 12,
                    "last_column": 33
                }
            }, "\r\n            ", {
                "type": "references",
                "id": "special",
                "path": [ {
                    "type": "property",
                    "id": "engSent"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 9,
                    "last_line": 9,
                    "first_column": 12,
                    "last_column": 28
                }
            }, " ", " ", {
                "type": "references",
                "id": "special",
                "path": [ {
                    "type": "property",
                    "id": "chnSent"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 9,
                    "last_line": 9,
                    "first_column": 30,
                    "last_column": 46
                }
            }, "\r\n            ", "</br>\r\n            " ], "\r\n        " ], "\r\n    " ], "\r\n" ], "\r\n\r\n", {
                "type": "macro_call",
                "id": "list",
                "args": [ {
                    "type": "integer",
                    "value": "3"
                } ],
                "pos": {
                    "first_line": 16,
                    "last_line": 16,
                    "first_column": 0,
                    "last_column": 8
                }
            }, "\r\n\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };
