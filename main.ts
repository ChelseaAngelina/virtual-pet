input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    250
    )
})
