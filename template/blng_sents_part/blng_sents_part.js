    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_addSpace": function(str) {
                    return "     " + str;
                }
            });
            return tpHelper.vm([ [ {
                "type": "foreach",
                "to": "sentence",
                "from": {
                    "type": "references",
                    "id": "sentence-pair",
                    "isWraped": true,
                    "leader": "$"
                },
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 39
                }
            }, "\r\n        ", {
                "type": "references",
                "id": "foreach",
                "path": [ {
                    "type": "property",
                    "id": "count"
                } ],
                "isWraped": true,
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 8,
                    "last_column": 24
                }
            }, ".\r\n        </br>\r\n        ", {
                "type": "references",
                "id": "sentence",
                "path": [ {
                    "type": "property",
                    "id": "sentence-eng"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 8,
                    "last_column": 30
                }
            }, "\r\n        ", "</br>\r\n        ", {
                "type": "references",
                "id": "sentence",
                "path": [ {
                    "type": "property",
                    "id": "sentence-translation"
                } ],
                "isWraped": true,
                "leader": "$!",
                "prue": true,
                "pos": {
                    "first_line": 6,
                    "last_line": 6,
                    "first_column": 8,
                    "last_column": 41
                }
            }, "\r\n        </br>\r\n        ", {
                "type": "references",
                "id": "sentence",
                "path": [ {
                    "type": "property",
                    "id": "source"
                } ],
                "isWraped": true,
                "leader": "$!",
                "prue": true,
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 8,
                    "last_column": 27
                }
            }, "\r\n        </br>\r\n" ], "\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };