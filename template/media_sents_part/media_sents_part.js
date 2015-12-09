    var tpHelper = require("../../tpl/tpHelper");
    
    module.exports = {
        "render":         function TvmT(_data) {
            return tpHelper.vm([ [ {
                "type": "foreach",
                "to": "perSent",
                "from": {
                    "type": "references",
                    "id": "sent",
                    "leader": "$"
                },
                "pos": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 28
                }
            }, "\r\n", [ {
                "type": "if",
                "condition": {
                    "type": "math",
                    "expression": [ {
                        "type": "references",
                        "id": "perSent",
                        "path": [ {
                            "type": "index",
                            "id": {
                                "type": "string",
                                "value": "@mediatype"
                            }
                        } ],
                        "leader": "$"
                    }, {
                        "type": "string",
                        "value": "audio"
                    } ],
                    "operator": "=="
                },
                "pos": {
                    "first_line": 2,
                    "last_line": 2,
                    "first_column": 4,
                    "last_column": 40
                }
            }, "\r\n", {
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
            }, ".\r\n</br>\r\n", {
                "type": "references",
                "id": "perSent",
                "path": [ {
                    "type": "property",
                    "id": "eng"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 5,
                    "last_line": 5,
                    "first_column": 8,
                    "last_column": 20
                }
            }, "\r\n", "</br>\r\n", [ {
                "type": "if",
                "condition": {
                    "type": "references",
                    "id": "perSent",
                    "path": [ {
                        "type": "property",
                        "id": "chn"
                    } ],
                    "leader": "$"
                },
                "pos": {
                    "first_line": 7,
                    "last_line": 7,
                    "first_column": 8,
                    "last_column": 25
                }
            }, "\r\n", {
                "type": "references",
                "id": "perSent",
                "path": [ {
                    "type": "property",
                    "id": "chn"
                } ],
                "isWraped": true,
                "leader": "$!",
                "prue": true,
                "pos": {
                    "first_line": 8,
                    "last_line": 8,
                    "first_column": 12,
                    "last_column": 27
                }
            }, "\r\n</br>\r\n" ], "\r\n", {
                "type": "references",
                "id": "perSent",
                "path": [ {
                    "type": "property",
                    "id": "snippets"
                }, {
                    "type": "property",
                    "id": "snippet"
                }, {
                    "type": "index",
                    "id": {
                        "type": "integer",
                        "value": "0"
                    }
                }, {
                    "type": "property",
                    "id": "source"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 11,
                    "last_line": 11,
                    "first_column": 8,
                    "last_column": 43
                }
            }, " ", ": ", {
                "type": "references",
                "id": "perSent",
                "path": [ {
                    "type": "property",
                    "id": "snippets"
                }, {
                    "type": "property",
                    "id": "snippet"
                }, {
                    "type": "index",
                    "id": {
                        "type": "integer",
                        "value": "0"
                    }
                }, {
                    "type": "property",
                    "id": "name"
                } ],
                "leader": "$",
                "prue": true,
                "pos": {
                    "first_line": 11,
                    "last_line": 11,
                    "first_column": 46,
                    "last_column": 79
                }
            }, " ", "\r\n</br>\r\n" ], "\r\n" ], "\r\n" ]).render(_data);
        },
        "init":         function init() {}
    };