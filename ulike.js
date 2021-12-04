function ulike(line, sep) {
    gen = ""
    for (let i in line) {
        gen += line[i]
        if (i != line.length - 1)
            gen += sep
    }
    return gen
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase()
}

const replaceStr = (str, index, char) => {
    return str.substring(0, index) + char + str.substring(index + 1);
}

function url(url) {
    init = url.replace("o", "0").replace("i", "1")
    res = ""
    for (let i in init) {
        if (isLetter(init[i]) && (Math.random() >= 0.5) && (init[i] == init[i].toLowerCase())) {
            res += init[i].toUpperCase()
        } else {
            res += init[i]
        }
        if (Math.random() <= 0.2)
            res += "/"
    }
    return res
}