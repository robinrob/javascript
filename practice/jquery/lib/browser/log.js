// Standard log
log = function (obj) {
    if (obj != null) {
        console.log("" + obj)
    }
    else {
        console.log()
    }
}

// Log array of objects
logs = function (objs) {
    log("" + objs.join(" "))
}

// Log without newline
logw = function (obj) {
    process.stdout.write("" + obj)
}

// Log object
logo = function(obj) {
    for (property in obj) {
        greenw(property + ": ")
        log(obj[property])
    }
}

// Log object own properties
logop = function(obj) {
    for (property in obj) {
        if (obj.hasOwnProperty(property)) {
            greenw(property + ": ")
            log(obj[property])
        }
    }
}

// Log in color
color = function (color) {
    return function(obj) {
        log(("" + obj)[color])
    }
}

// Log array of objects in color
colors = function (color) {
    return function(objs) {
        log(("" + objs.join(" "))[color])
    }
}

// Log array of objects without newline
colorw = function (color) {
    return function(obj) {
        logw(("" + obj)[color])
    }
}

// Shortcuts for color logging functions
green = color('green')
greens = colors('green')
greenw = colorw('green')

yellow = color('yellow')
yellows = colors('yellow')
yelloww = colorw('yellow')

red = color('red')
reds = colors('red')
redw = colorw('red')

blue = color('blue')
blues = colors('blue')
bluew = colorw('blue')

cyan = color('cyan')
cyans = colors('cyan')
cyanw = colorw('cyan')


// Standard write
write = function (obj) {
    if (obj != null) {
        document.write("" + obj + "<br>")
    }
    else {
        document.write("<br>")
    }
}

// Write without newline
writew = function (obj) {
    document.write("" + obj)
}

// Write object
writeo = function(obj) {
    for (property in obj) {
        write(property + ": " + obj[property])
    }
}