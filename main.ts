input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    zahl += 775
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    zahl = 0
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    zahl += 1550
    led.stopAnimation()
})
let zahl = 0
zahl = 0
basic.forever(function () {
    basic.showNumber(zahl)
})
