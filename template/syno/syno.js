    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            return tpHelper.vm([ [ {
                "type": "foreach",
                "to": "perSyno",
                "from": {
                    "type": "references",
                    "id": "synos",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 28
                }
            }, "", {
                "type": "references",
                "id": "perSyno",
                "path": [ {
                    "type": "property",
                    "id": "syno"
                }, {
                    "type": "property",
                    "id": "pos"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 8,
                    "last_column": 25
                }
            }, " ", {
                "type": "references",
                "id": "perSyno",
                "path": [ {
                    "type": "property",
                    "id": "syno"
                }, {
                    "type": "property",
                    "id": "tran"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 26,
                    "last_column": 44
                }
            }, "", "</br>", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "ws",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "perSyno",
                    "path": [ {
                        "type": "property",
                        "id": "syno"
                    }, {
                        "type": "property",
                        "id": "ws"
                    } ],
                    "leader": "$"
                } ],
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 8,
                    "last_column": 36
                }
            }, "", [ {
                "type": "foreach",
                "to": "pWs",
                "from": {
                    "type": "references",
                    "id": "ws",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 29
                }
            }, "", {
                "type": "references",
                "id": "pWs",
                "path": [ {
                    "type": "property",
                    "id": "w"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 12,
                    "last_column": 18
                }
            }, "", [ {
                "type": "if",
                "condition": {
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
                        "id": "ws",
                        "path": [ {
                            "type": "property",
                            "id": "length"
                        } ],
                        "leader": "$"
                    } ],
                    "operator": "!="
                },
                "pos": {
                    "first_line": 7,
                    "last_line": 7,
                    "first_column": 12,
                    "last_column": 47
                }
            }, " / " ], "" ], "" ], "" ]).render(_data);
        },
        "init":         function init() {}
    };
