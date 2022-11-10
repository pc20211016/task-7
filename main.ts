let LIGHT = 0
input.onButtonPressed(Button.A, function () {
    LIGHT = input.lightLevel()
    basic.showNumber(LIGHT)
})
input.onButtonPressed(Button.B, function () {
    if (LIGHT <= 100) {
        led.setBrightness(255)
        led.plotBrightness(3, 4, 255)
        led.plotBrightness(2, 4, 255)
    } else {
        if (LIGHT > 100) {
            led.setBrightness(0)
            led.plotBrightness(1, 4, 0)
            led.plotBrightness(2, 4, 0)
        }
    }
})
basic.forever(function () {
	
})
