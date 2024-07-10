function loopField() {
    displayField()

    if (state === '') {
        movePlayer()
    }
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])
    context.strokeRect(UI.field.buttonInfo[0], UI.field.buttonInfo[1], UI.field.buttonInfo[2], UI.field.buttonInfo[3])

    drawField()

    if (state === 'Info') {
        drawInfo()
    }

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
            } else if (state === 'Info') {
                if (pointInsideRectArray(x, y, UI.info.buttonClose)) {
                    state = ''
                }
            }
        }
    }
}

function keyDownField(key) {
    if (key === 'w') {
        varInput.up = true
    }

    if (key === 'a') {
        varInput.left = true
    }

    if (key === 's') {
        varInput.down = true
    }

    if (key === 'd') {
        varInput.right = true
    }

    if (menu === false) {
        if (state === '') {
            if (key === 'i') {
                state = 'Info'
            }
        }
    }
}

function keyUpField(key) {
    if (key === 'w') {
        varInput.up = false
    }

    if (key === 'a') {
        varInput.left = false
    }

    if (key === 's') {
        varInput.down = false
    }

    if (key === 'd') {
        varInput.right = false
    }
}