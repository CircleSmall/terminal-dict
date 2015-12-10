var sdk = require("./sdk");
var templates = require("../template/modules");
var colors = require("colors");
var wrap = require("./wrap")
var template_conifg = require("./template-config");
var template_list = template_conifg["list"];

var canvas, ctx;

module.exports = function(input, _mode) {
    var isEn = /^[a-zA-Z\-\s]+$/.test(input);
    var isCh = /^[\u4e00-\u9fa5]+$/.test(input);

    //模板选择
    // var mode;
    // isEn ? mode = _mode || "ec" : mode = _mode || "ce";

    // console.log("\n")

    // if (!template_list[mode]) {
    //     console.log(colors.red('暂不支持此模板'));
    //     return;
    // }

    // console.log(colors.grey('正在加载' + template_list[mode] + '模板...'));
    console.log("\n");

    sdk(input, function(data) {
        var str;
        if (_mode && !data[_mode]) {
            console.log(colors.red('该词条没有此模板'))
            return;
        } else if (_mode && data[_mode]) {
            str = templates[_mode].render(data[_mode]);
        } else if (!_mode) {
            //如果没有参数,默认查词逻辑
            var mode,modeData;
            isEn ? mode = _mode || "ec" : mode = _mode || "ce";
            if(!data[mode]) {
                for(var i in data) {
                    if(template_list[i]) {
                        modeData = data[i];
                        mode = i;
                        break;
                    }
                };
                if(!modeData) {
                    console.log(colors.grey("查询没有结果"))
                    return;
                }
            } else {
                modeData = data[mode];
            }

            console.log("    " + colors.grey(template_list[mode] + "模板"));
            console.log("\n");
            str = templates[mode].render(modeData);
        }
        draw(parseStr(str));
    })
}

function parseStr(str) {
    var result = [];
    var arr = str.split("</br>");
    for (var i in arr) {
        var s = arr[i].replace(/^\s+|\s+$/g, "");
        s = s.replace(/<b>(.*?)<\/b>/g, function(m, p1) {
            return colors.yellow(p1);
        })
        s = s.replace(/<\w><\/\w>/g, "");
        s = s.replace(/\n|\r|\t/g, " ")
        result.push(s);
    }
    return result
}

function draw(arr) {
    for (var i in arr) {
        fillText(arr[i], 30)
    }
}

function fillText(str, max) {
    var lines = wrap(str, max);
    for (var i in lines) {
        console.log("\t" + lines[i]);
    }
}
