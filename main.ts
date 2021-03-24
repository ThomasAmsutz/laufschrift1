music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
basic.showString("Lieber Elias, alles Gute zum 6. Geburtstag")
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
    } else if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Ghost)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.EigthNote)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Snake)
    } else {
        basic.clearScreen()
    }
})
