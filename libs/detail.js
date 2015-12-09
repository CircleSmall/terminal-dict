var sdk = require("./sdk");
var templates = require("../template/modules");
var colors = require("colors");
var template_config = require("./template-config");
var templates = require("../template/modules");
var wrap = require("./wrap");
var detail_walk = require("./detail-walk")

module.exports = function(input) {
    console.log("\n")
    console.log(colors.grey('正在加载...'));

    sdk(input, function(data) {
        parseData(data);
    })
}

/**
 * 解析数据,生成可配置的data
 */
function parseData(data){
    var result = {};
    result.tabs = [];
    result.ids = {};

    //获得配置数据
    var order = template_config.order;
    var list = template_config.list;
    var group = template_config.group;
    
    for(var i in order) {
        var groupContent = [];
        for(var g in group[order[i]].content) {
            var t = group[order[i]].content[g];
            //确认模板是否存在
            if(data[t]) {
                groupContent.push(t);
            };
        }
        result.tabs.push({
            name: group[order[i]].name,
            ids: groupContent,
        })
    };
    for(var j in list) {
        if(!data[j]) continue;
        var str = templates[j].render(data[j]);
        var content = parseStr(str);
        result.ids[j] = {
            title: list[j],
            detail: false,
            content: content
        }
    };
    // console.log(result["ids"])
    // console.log(result["tabs"])
    detail_walk(result);
}

function parseStr(str) {
    var result = [];
    var arr = str.split("</br>");
    for(var i in arr ) {
        var s = arr[i].replace(/^\s+|\s+$/g,"");
        s = s.replace(/<b>(.*?)<\/b>/g, function(m,p1) {
            return colors.yellow(p1);
        })
        s = s.replace(/<\w>|<\/\w>/g,"");
        s = s.replace(/\n|\r|\t/g, " ")
        result.push(s);
    }
    return result
}