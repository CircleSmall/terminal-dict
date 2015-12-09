/**
 * 命令行字符串截断
 */
var unicode = require("./unicode");

//校验长度,中文按照两个字符的宽度来算
//返回true 是str > width，返回false str < width
function checkLength(str, width) {
    var count = 0;
    for(var i = 0 , l = str.length; i < l; i++) {
        if(str[i]) {
            if(str.charCodeAt(i) < 122) {//小于122的按照一个字符算
                count = count + 0.5;
            } else {
                count = count + 1;
            }
        }
    }
    var result;
    (width) > count ? result = false : result = true
    return result;
}

module.exports = function(line, width) {
    var part, result = [],
        i, total, line = line;

    // if(line.length < width) {
    if(!checkLength(line, width)) {
        result.push(line);
        return  result;
    }
    // while (line.length > width) {
    while (checkLength(line,width)) {
        for (i = 0, total = 0; i < line.length; i++) {
            while (line[i] === '\x1b') {
                while (line[i] && line[i++] !== 'm');
            }

            if (!line[i]) break;
            
            if(line.charCodeAt(i) < 122 ) {
                total = total + 0.5;
            } else {
                total = total + 1;
            }
            if (total >= width) {
                // If we're not wrapping the text, we have to finish up the rest of
                // the control sequences before cutting off the line.
                i++;

                // Try to find a character to break on.
                if (i !== line.length) {
                    // <XXX>
                    // Compensate for surrogate length
                    // counts on wrapping (experimental):
                    // NOTE: Could optimize this by putting
                    // it in the parent for loop.
                    if (unicode.isSurrogate(line, i)) i--;
                    for (var s = 0, n = 0; n < i; n++) {
                        if (unicode.isSurrogate(line, n)) s++, n++;
                    }
                    i += s;
                    // </XXX>
                    j = i;
                    // Break _past_ space.
                    // Break _past_ double-width chars.
                    // Break _past_ surrogate pairs.
                    // Break _past_ combining chars.
                    while (j > i - 10 && j > 0) {
                        j--;
                        if (line[j] === ' ' || line[j] === '\x03' || (unicode.isSurrogate(line, j - 1) && line[j + 1] !== '\x03') || unicode.isCombining(line, j)) {
                            break;
                        }
                    }
                    if (line[j] === ' ' || line[j] === '\x03' || (unicode.isSurrogate(line, j - 1) && line[j + 1] !== '\x03') || unicode.isCombining(line, j)) {
                        i = j + 1;
                    }
                }
                break;
            }
        }
        part = line.substring(0, i);
        line = line.substring(i);
        result.push(part);
        if (line === '') continue;
        if (/^(?:\x1b[\[\d;]*m)+$/.test(line)) {
            result[result.length - 1] += line;
            continue;
        }
    }
    result.push(line);
    return result
}
