function loopLevel() {
    displayLevel()
}

function displayLevel() {
    drawSceneInit()

    context.fillText('Select Level', UI.level.textTitle[0], UI.level.textTitle[1])
    context.strokeRect(UI.level.buttonBack[0], UI.level.buttonBack[1], UI.level.buttonBack[2], UI.level.buttonBack[3])
    drawLevel()
}

function mouseUpLevel(x, y, button) {

}

function keyDownLevel(key) {

}

function keyUpLevel(key) {

}