/**
 *  定制一个自己的terminal-list(原有的npm满足不了需求)
 *      1、list 是个二维数组，横坐标是tab,纵坐标是每个tab下的item
 *      2、通过按键hjkl(左下上右)来让焦点定位数组中的某一坐标
 *      3、在某一具体坐标处，可按下回车,将该坐标的文本展开阅读,再按下回车则关闭
 */

module.exports = List;
var colors = require('colors');
var unicode = require("./unicode");
var wrap = require("./wrap")

var stdin = process.stdin;
require('keypress')(stdin);

var Emitter = require('events').EventEmitter;
var Canvas = require('term-canvas');


function List(opt) {
    var opt = opt || {};
    var canvas = this.canvas = new Canvas(opt.width, opt.height);
    this.ctx = canvas.getContext('2d');
    this.marker = opt.marker || '› ';
    this.markerLength = opt.markerLength || this.marker.length;
    this.onkeypress = this.onkeypress.bind(this);
    this.tabsW = opt.tabsW;
    this.panelTitleW = opt.panelTitleW;
    this.panelContentW = opt.panelContentW;

    this.tabs = opt.tabs; //tab表
    this.ids = opt.ids; //id表
    this.currentTab = this.tabs[0].name; //当前tab名
    this.currentId = this.tabs[0]["ids"][0]; //当前id名
};

// 继承事件
List.prototype.__proto__ = Emitter.prototype;

//按键
List.prototype.onkeypress = function(ch, key) {
    if (!key) return;

    this.emit('keypress', key, this.selected);
    switch (key.name) {
        case 'k':
        case 'up':
            this.up();
            break;
        case 'j':
        case 'down':
            this.down();
            break;
        case 'h':
        case 'left':
            this.left();
            break;
        case 'l':
        case 'right':
            this.right();
            break;
        case 'c':
            key.ctrl && this.stop();
            break;
        case 'return':
            this.enter();
            break;
    }
};

List.prototype.select = function(id, tab) {
    if (tab && typeof tab == "object") {
        tab = tab.name;
    }
    this.emit('select', {
        id: id,
        tab: tab
    });

    id ? this.currentId = id : 0;
    tab ? this.currentTab = tab : 0;
    this.draw();
};

List.prototype.up = function() {
    var currentTabIndex = this.tabs.map(prop('name')).indexOf(this.currentTab);
    var idsObj = this.tabs[currentTabIndex].ids;
    var currentIdIndex = idsObj.indexOf(this.currentId);
    if (--currentIdIndex < 0) {
        currentIdIndex = idsObj.length - 1;
    }
    this.select(idsObj[currentIdIndex]);
}

List.prototype.down = function() {
    var currentTabIndex = this.tabs.map(prop('name')).indexOf(this.currentTab);
    var idsObj = this.tabs[currentTabIndex].ids;
    var currentIdIndex = idsObj.indexOf(this.currentId);
    if (++currentIdIndex >= idsObj.length) {
        currentIdIndex = 0;
    }
    this.select(idsObj[currentIdIndex]);
}

List.prototype.left = function() {
    var currentTabIndex = this.tabs.map(prop('name')).indexOf(this.currentTab);

    if (--currentTabIndex < 0) {
        currentTabIndex = this.tabs.length - 1;
    }
    this.select(this.tabs[currentTabIndex]["ids"][0], this.tabs[currentTabIndex].name);
}

List.prototype.right = function() {
    var currentTabIndex = this.tabs.map(prop('name')).indexOf(this.currentTab);

    if (++currentTabIndex >= this.tabs.length) {
        currentTabIndex = 0;
    }
    this.select(this.tabs[currentTabIndex]["ids"][0], this.tabs[currentTabIndex].name);
}

List.prototype.enter = function() {
    var currentTabIndex = this.tabs.map(prop('name')).indexOf(this.currentTab);
    var idsObj = this.tabs[currentTabIndex].ids;
    var currentIdIndex = idsObj.indexOf(this.currentId);
    if(!this.ids[idsObj[currentIdIndex]]) return;
    this.ids[idsObj[currentIdIndex]].detail = !this.ids[idsObj[currentIdIndex]].detail;
    this.draw();
}

List.prototype.draw = function() {
    try {
        var that = this,
            ctx = that.ctx;
        var x = 0;
        ctx.clear();
        ctx.save();
        ctx.translate(3, 3);

        var pad = Array(that.markerLength + 1).join(' ');
        var tempL = pad.length; //临时用来计算tab宽度的变量

        //遍历列表
        this.tabs.forEach(function(tab) {
            var content = changeStrLength(tab.name, that.tabsW);

            if (that.currentTab == tab.name) {
                //如果是当前tab
                ctx.fillText(colors.green(tab.name), tempL, 0);
                that.drawPanel.call(that, tab);

            } else {
                ctx.fillText(content, tempL, 0);
            }

            tempL = +(tempL) + +(content.length) + 2;
        })
        ctx.write('\n\n');
        ctx.restore();
    } catch (err) {}
}

function changeStrLength(str, length){
    while(str.length < length) {
        str = str + " ";
    }
    return str;
} 

//绘制panel
List.prototype.drawPanel = function(tab) {
    var that = this;
    var y = 1;
    var pad = Array(that.markerLength + 1).join(' ');
    tab.ids.forEach(function(id) {
        var item = that.ids[id];
        var content;
        if (id == that.currentId) { //如果是当前id
            content = changeStrLength(that.marker + item.title, that.panelTitleW);
            that.ctx.fillText(content, 0, y = y + 1);
        } else {
            content = changeStrLength(pad + item.title, that.panelTitleW);
            that.ctx.fillText(content, 0, y = y + 1);
        }
        if (item.detail) {
            var l = content.length;
            y = that.drawPanelContent(item.content, l, y, that.panelContentW)
        }
    });
}

List.prototype.drawPanelContent = function(strArr, x, y, width) {
    var y = y;
    for (var i in strArr) {
        y = this.fillText(strArr[i], x, y, width);
    }
    return y;
}

/**
 * 以x,y为起点开始填充文本
 * 若文本超过宽度，则折行
 * 返回这行后的y坐标
 */
List.prototype.fillText = function(str, x, y, width) {
    var that = this;
    var ctx = this.ctx;
    var x = x || 0;
    var y = y || 0;
    var max = width; //一行的长度
    var strLength = str.length; //字符串长度
    var lines = wrap(str, max);
    for (var i in lines) {
        that.ctx.fillText(lines[i], x, y++);
    }
    return y;
}

List.prototype.start = function() {
    stdin.on('keypress', this.onkeypress);
    this.draw();
    this.ctx.hideCursor();
    stdin.setRawMode(true);
    stdin.resume();
};

List.prototype.stop = function() {
    this.ctx.reset();
    process.stdin.pause();
    stdin.removeListener('keypress', this.onkeypress);
};


// List.prototype.at = function(index) {
// var targetTab,targetId;

// if(tab) {
//    var tabIndex = this.tabs.map(prop('name')).indexOf(tab)
//    targetTab = this.tabs[tabIndex];//拿到目标tag
// } else {
//     targetTab = this.currentTab;
// };

// return this.items[i];
// };


/**
 * Prop helper.
 */

function prop(name) {
    return function(obj) {
        return obj[name];
    }
}
