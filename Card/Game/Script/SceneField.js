function loopField() {
    displayField()
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])
    context.strokeRect(UI.field.buttonInfo[0], UI.field.buttonInfo[1], UI.field.buttonInfo[2], UI.field.buttonInfo[3])

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpField(x, y, button) {
    if (button === 0) {
        if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        } else if (menu === false) {
            if (pointInsideRectArray(x, y, UI.field.buttonMenu)) {
                menu = true
            }
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.field.buttonInfo)) {
                    state = 'Info'
                }
            }
        }
    }
}

function keyDownField(key) {

}

function keyUpField(key) {

}