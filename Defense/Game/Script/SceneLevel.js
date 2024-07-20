function loopLevel() {
    displayLevel()
}

function displayLevel() {
    drawSceneInit()

    context.fillText('Select Level', UI.level.textTitle[0], UI.level.textTitle[1])
    context.strokeRect(UI.level.buttonBack[0], UI.level.buttonBack[1], UI.level.buttonBack[2], UI.level.buttonBack[3])
    context.strokeRect(UI.level.buttonCollection[0], UI.level.buttonCollection[1], UI.level.buttonCollection[2], UI.level.buttonCollection[3])
    drawLevel()
}

function mouseUpLevel(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.level.buttonCollection)) {
                    scene = 'Collection'
                    state = ''
                }
            }
        }
    }
}

function keyDownLevel(key) {

}

function keyUpLevel(key) {

}