input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        bluetooth.advertiseUrl(
        "https://youtu.be/Qwscb3QIVSg",
        7,
        true
        )
    }
})
