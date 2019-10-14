brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.GreenFlash)
    brick.showString("Hello World", 1)
    brick.showString("Everything is Awesome", 2)
    brick.showString("I am You as You are me", 3)
})
