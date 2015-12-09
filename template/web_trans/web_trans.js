    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_getWebTran": function() {
                    if (this["web-translation"][0]["@same"] !== undefined) {
                        return this["web-translation"][0].trans;
                    } else {
                        return [];
                    }
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
            }, "\r\n", [ {
                "type": "if",
                "condition": {
                    "type": "references",
                    "id": "web-translation",
                    "path": [ {
                        "type": "index",
                        "id": {
                            "type": "integer",
                            "value": "0"
                        }
                    }, {
                        "type": "index",
                        "id": {
                            "type": "string",
                            "value": "@same"
                        }
                    } ],
                    "isWraped": true,
                    "leader": "$"
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 0,
                    "last_column": 35
                }
            }, "\r\n    ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "webTrans",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "_getWebTran",
                    "leader": "$",
                    "args": false
                } ],
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 4,
                    "last_column": 36
                }
            }, "\r\n    ", [ {
                "type": "foreach",
                "to": "perTran",
                "from": {
                    "type": "references",
                    "id": "webTrans",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 4,
                    "last_column": 35
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
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 68
                }
            }, "\r\n            ", {
                "type": "references",
                "id": "perTran",
                "path": [ {
                    "type": "property",
                    "id": "value"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 12,
                    "last_column": 26
                }
            }, "\r\n            ", "</br>\r\n            ", {
                "type": "references",
                "id": "perTran",
                "path": [ {
                    "type": "property",
                    "id": "summary"
                }, {
                    "type": "property",
                    "id": "line"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 12,
                    "last_column": 33
                }
            }, "\r\n            ", "</br>\r\n        " ], "\r\n    " ], "\r\n" ], "\r\n" ], "\r\n\r\n", {
                "type": "macro_call",
                "id": "list",
                "args": [ {
                    "type": "integer",
                    "value": "3"
                } ],
                "pos": {
                    "first_line": 15,
                    "last_line": 15,
                    "first_column": 0,
                    "last_column": 8
                }
            }, "\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };
