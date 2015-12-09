var SDK = require('sdk');

var APIs = {
    jsonapi: {
        url: '/jsonapi'
    },
    jsonresult: {
        url: '/jsonresult'
    }
};

var rules = {}

var api = new SDK('http://dict.youdao.com/', APIs, rules);

var query = {
    qs: {
        jsonversion: 2,
        client: "mobile",
        q: "test"
    }
}

var cequery = {
    qs: {
        q: "好",
        type: 1,
        pos: -1,
    }
}

module.exports = function(q, callback) {
    query.qs.q = q;
    api.jsonapi(query).then(function(body) {
        callback && callback(body.body)
    })
}

module.exports.ce = function(q, callback) {
    cequery.qs.q = q;
    api.jsonresult(cequery).then(function(body) {
        callback && callback(body.body)
    })
}
