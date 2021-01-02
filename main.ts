let cislo = 0
function _7 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
}
function zatreseni () {
    cislo = randint(1, 6)
    if (cislo == 1) {
        _1()
    } else if (cislo == 2) {
        _2()
    } else if (cislo == 3) {
        _3()
    } else if (cislo == 4) {
        _4()
    } else if (cislo == 5) {
        _5()
    } else if (cislo == 6) {
        _6()
    } else if (cislo == 7) {
        _7()
    } else {
    	
    }
}
function _2 () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `)
}
function _6 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    zatreseni()
})
function _5 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
}
function _3 () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
}
function _4 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
}
function _1 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
