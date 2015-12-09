    var tpHelper = require("../../tpl/tpHelper");
    
    module.exports = {
        "render":         function TvmT(_data) {
            _data = tpHelper.mixin(_data, {
                "_getSpeechSize": function(speechSise) {
                    return speechSise.toUpperCase();
                },
                "_handleMore": function(moduleId) {
                    bridge("more", moduleId, "查看更多例句");
                },
                "_encodeURI": function(url) {
                    return encodeURIComponent(url);
                }
            });
            return tpHelper.vm([ "\r\n", [ {
                "type": "foreach",
                "to": "sentence",
                "from": {
                    "type": "references",
                    "id": "sent",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 0,
                    "last_column": 28
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
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 8,
                    "last_column": 24
                }
            }, ".\r\n        </br>\r\n        ", {
                "type": "references",
                "id": "sentence",
                "path": [ {
                    "type": "property",
                    "id": "foreign"
                } ],
                "isWraped": true,
                "leader": "$!",
                "prue": true,
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 28
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
                    "first_line": 7,
                    "last_line": 7,
                    "first_column": 8,
                    "last_column": 27
                }
            }, "\r\n        </br>\r\n" ], "\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };
