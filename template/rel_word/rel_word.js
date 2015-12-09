    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            return tpHelper.vm([ "    词根：", {
                "type": "references",
                "id": "stem",
                "isWraped": true,
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 7,
                    "last_column": 14
                }
            }, "\r\n    </br>\r\n    ", [ {
                "type": "foreach",
                "to": "perRel",
                "from": {
                    "type": "references",
                    "id": "rels",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 4,
                    "last_column": 30
                }
            }, "\r\n        ", {
                "type": "set",
                "equal": [ {
                    "type": "references",
                    "id": "rel",
                    "leader": "$"
                }, {
                    "type": "references",
                    "id": "perRel",
                    "path": [ {
                        "type": "property",
                        "id": "rel"
                    } ],
                    "leader": "$"
                } ],
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 8,
                    "last_column": 30
                }
            }, "\r\n        ", {
                "type": "references",
                "id": "rel",
                "path": [ {
                    "type": "property",
                    "id": "pos"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 16
                }
            }, "\r\n        ", "</br>\r\n            ", [ {
                "type": "foreach",
                "to": "perWord",
                "from": {
                    "type": "references",
                    "id": "rel",
                    "path": [ {
                        "type": "property",
                        "id": "words"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 7,
                    "last_line": 7,
                    "first_column": 12,
                    "last_column": 44
                }
            }, "\r\n                ", {
                "type": "references",
                "id": "perWord",
                "path": [ {
                    "type": "property",
                    "id": "word"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 16,
                    "last_column": 29
                }
            }, " ", {
                "type": "references",
                "id": "perWord",
                "path": [ {
                    "type": "property",
                    "id": "tran"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 30,
                    "last_column": 43
                }
            }, "\r\n                ", "</br>\r\n            " ], "\r\n        \r\n    " ], "\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };
