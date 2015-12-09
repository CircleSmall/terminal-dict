var colors = require("colors");
module.exports = function() {
    console.log("\n")
    console.log(colors.grey('当前支持的模板'));
    console.log("\n");
    console.log("\t" + "英汉(ec)");
    console.log("\t" + "汉英(ce)");
    console.log("\t" + "网络释义(web_trans)");
    console.log("\t" + "专业释义(special)");
    console.log("\t" + "英英释义(ee)");
    console.log("\t" + "词组短语(phrs)");
    console.log("\t" + "同近义词(syno)");
    console.log("\t" + "同根词(rel_word)");
    console.log("\t" + "双语例句(blng_sents_part)");
    console.log("\t" + "原声例句(media_sents_part)");
    console.log("\t" + "权威例句(auth_sents_part)");

}