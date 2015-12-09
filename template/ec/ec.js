    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render":         function TvmT(_data) {
            return tpHelper.vm([ "    ", [ {
                "type": "foreach",
                "to": "_word",
                "from": {
                    "type": "references",
                    "id": "word",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 4,
                    "last_column": 29
                }
            }, "\r\n            ", [ {
                "type": "foreach",
                "to": "trsArr",
                "from": {
                    "type": "references",
                    "id": "_word",
                    "path": [ {
                        "type": "property",
                        "id": "trs"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 12,
                    "last_column": 43
                }
            }, "\r\n                ", [ {
                "type": "foreach",
                "to": "_tr",
                "from": {
                    "type": "references",
                    "id": "trsArr",
                    "path": [ {
                        "type": "property",
                        "id": "tr"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 3,
                    "last_line": 3,
                    "first_column": 16,
                    "last_column": 44
                }
            }, "\r\n                    ", {
                "type": "references",
                "id": "_tr",
                "path": [ {
                    "type": "property",
                    "id": "l"
                }, {
                    "type": "property",
                    "id": "i"
                } ],
                "isWraped": true,
                "leader": "$!",
                "prue": true,
                "pos": {
                    "first_line": 4,
                    "last_line": 4,
                    "first_column": 20,
                    "last_column": 31
                }
            }, "\r\n                    </br>\r\n                " ], "\r\n            " ], "\r\n        ", [ {
                "type": "if",
                "condition": {
                    "type": "references",
                    "id": "_word",
                    "path": [ {
                        "type": "property",
                        "id": "wfs"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 8,
                    "last_column": 23
                }
            }, "\r\n            ", [ {
                "type": "foreach",
                "to": "sub",
                "from": {
                    "type": "references",
                    "id": "_word",
                    "path": [ {
                        "type": "property",
                        "id": "wfs"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 9,
                    "last_line": 9,
                    "first_column": 12,
                    "last_column": 40
                }
            }, "\r\n                ", {
                "type": "references",
                "id": "sub",
                "path": [ {
                    "type": "property",
                    "id": "wf"
                }, {
                    "type": "property",
                    "id": "name"
                } ],
                "isWraped": true,
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 10,
                    "last_line": 10,
                    "first_column": 16,
                    "last_column": 30
                }
            }, " ", {
                "type": "references",
                "id": "sub",
                "path": [ {
                    "type": "property",
                    "id": "wf"
                }, {
                    "type": "property",
                    "id": "value"
                } ],
                "isWraped": true,
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 10,
                    "last_line": 10,
                    "first_column": 31,
                    "last_column": 46
                }
            }, "\r\n                </br>\r\n            " ], "\r\n        " ], "\r\n    " ], "\r\n" ]).render(_data);
        },
        "init":         function init() {
            var target = document.getElementById("examLabels");
            function getRect() {
                if (target) {
                    var clientRect = target.getBoundingClientRect();
                    var rect = {
                        "left": clientRect.left,
                        "top": clientRect.top,
                        "right": clientRect.right,
                        "bottom": clientRect.bottom
                    };
                    return rect;
                }
            }
            if (target) {}
        }
    };
