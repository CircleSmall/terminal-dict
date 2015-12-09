var list = require("./terminal-list");

module.exports = function(data) {
    var menu = new list({
        width: 50,
        height: 200,
        tabs: data.tabs,
        ids: data.ids,
        tabsW: 10,//tab的宽度
        panelTitleW: 14,//panel 的title的宽度
        panelContentW: 30,//panel 的content的宽度
    });

    menu.on('keypress', function(key, item) {
        if (key) {
            if (key.name == 'return') {

            } else if (key.name == 'a') {

            } else if (key.name == 'g') {} else if (key.name == 'q') {
                menu.stop();
            } else {
                return false;
            }
        } else {
            return false;
        }
    });


    menu.start();
}
