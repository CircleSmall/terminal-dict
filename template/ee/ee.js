    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_getTr": function(trs) {
                    return trs[0];
                },
                "_getContent": function(tr) {
                    return tr["tr"][0]["l"]["i"];
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
            }, "    ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "tr",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "_getTr",
                    "leader": "$",
                    "args": [ {
                        "type": "references",
                        "id": "word",
                        "path": [ {
                            "type": "property",
                            "id": "trs"
                        } ],
                        "leader": "$"
                    } ]
                } ],
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 4,
                    "last_column": 34
                }
            }, "    ", {
                "type": "references",
                "id": "tr",
                "path": [ {
                    "type": "property",
                    "id": "pos"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 4,
                    "last_column": 11
                }
            }, "    ", "</br>    ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "content",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "_getContent",
                    "leader": "$",
                    "args": [ {
                        "type": "references",
                        "id": "tr",
                        "leader": "$"
                    } ]
                } ],
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 4,
                    "last_column": 38
                }
            }, "    ", {
                "type": "references",
                "id": "content",
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 4,
                    "last_column": 12
                }
            }, "    ", "</br>" ], "", {
                "type": "macro_call",
                "id": "list",
                "args": [ {
                    "type": "integer",
                    "value": "3"
                } ],
                "pos": {
                    "first_line": 10,
                    "last_line": 10,
                    "first_column": 0,
                    "last_column": 8
                }
            }, "" ]).render(_data);
        },
        "init":         function init() {}
    };
