module.exports = {
    list: {
        "ec": "英汉",
        "ce": "汉英",
        "web_trans": "网络释义",
        "special": "专业释义",
        "ee": "英英释义",
        "phrs": "词组短语",
        "syno": "同近义词",
        "rel_word": "同根词",
        "blng_sents_part": "双语例句",
        "media_sents_part": "原声例句",
        "auth_sents_part": "权威例句",
    },
    order: ["web_trans_group", "usage_group", "example_group"],
    group: {
        //释义
        web_trans_group: {
            content: ["web_trans", "special", "ee"],
            name: "释义"
        },
        // 用法
        usage_group: {
            content: ["phrs", "syno", "rel_word"], //词组短语、同近义词、同根词
            name: "用法"
        },
        // 例句
        example_group: {
            content: ["blng_sents_part", "media_sents_part", "auth_sents_part"],
            name: "例句",
        }
    }
}
