    var tpHelper = require("../../tpl/tpHelper");
    module.exports = {
        "render": function TvmT(_data) {
            return tpHelper.vm([
                [{
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
                        "first_column": 0,
                        "last_column": 25
                    }
                }, "  ", {
                    "type": "set",
                    "equal": [{
                        "type": "references",
                        "id": "allTrs",
                        "leader": "$"
                    }, {
                        "type": "references",
                        "id": "_word",
                        "path": [{
                            "type": "property",
                            "id": "trs"
                        }],
                        "leader": "$"
                    }],
                    "pos": {
                        "first_line": 2,
                        "last_line": 2,
                        "first_column": 4,
                        "last_column": 30
                    }
                }, "  ", [{
                    "type": "foreach",
                    "to": "perTr",
                    "from": {
                        "type": "references",
                        "id": "allTrs",
                        "leader": "$"
                    },
                    "pos": {
                        "first_line": 3,
                        "last_line": 3,
                        "first_column": 8,
                        "last_column": 35
                    }
                }, "  ", [{
                    "type": "foreach",
                    "to": "_tr",
                    "from": {
                        "type": "references",
                        "id": "perTr",
                        "leader": "$"
                    },
                    "pos": {
                        "first_line": 4,
                        "last_line": 4,
                        "first_column": 12,
                        "last_column": 36
                    }
                }, "", [{
                    "type": "foreach",
                    "to": "_perTr",
                    "from": {
                        "type": "references",
                        "id": "_tr",
                        "leader": "$"
                    },
                    "pos": {
                        "first_line": 6,
                        "last_line": 6,
                        "first_column": 16,
                        "last_column": 41
                    }
                }, "", {
                    "type": "set",
                    "equal": [{
                        "type": "references",
                        "id": "perLi",
                        "leader": "$"
                    }, {
                        "type": "references",
                        "id": "_perTr",
                        "path": [{
                            "type": "property",
                            "id": "l"
                        }, {
                            "type": "property",
                            "id": "i"
                        }],
                        "leader": "$"
                    }],
                    "pos": {
                        "first_line": 7,
                        "last_line": 7,
                        "first_column": 20,
                        "last_column": 46
                    }
                }, "", [{
                    "type": "foreach",
                    "to": "perWord",
                    "from": {
                        "type": "references",
                        "id": "perLi",
                        "leader": "$"
                    },
                    "pos": {
                        "first_line": 8,
                        "last_line": 8,
                        "first_column": 20,
                        "last_column": 48
                    }
                }, "", [{
                    "type": "if",
                    "condition": {
                        "type": "math",
                        "expression": [{
                            "type": "math",
                            "expression": [{
                                "type": "references",
                                "id": "perWord",
                                "leader": "$"
                            }, {
                                "type": "string",
                                "value": "",
                                "isEval": true
                            }],
                            "operator": "!="
                        }, {
                            "type": "math",
                            "expression": [{
                                "type": "references",
                                "id": "perWord",
                                "leader": "$"
                            }, {
                                "type": "string",
                                "value": " ",
                                "isEval": true
                            }],
                            "operator": "!="
                        }],
                        "operator": "&&"
                    },
                    "pos": {
                        "first_line": 9,
                        "last_line": 9,
                        "first_column": 24,
                        "last_column": 62
                    }
                }, "", {
                    "type": "references",
                    "id": "perWord",
                    "path": [{
                        "type": "index",
                        "id": {
                            "type": "string",
                            "value": "#text",
                            "isEval": true
                        }
                    }],
                    "isWraped": true,
                    "leader": "$!",
                    "prue": true,
                    "pos": {
                        "first_line": 10,
                        "last_line": 10,
                        "first_column": 24,
                        "last_column": 44
                    }
                }, ""], ""],""], ""], ""], ""], ""
            ]).render(_data);
        },
        "init": function init() {}
    };
