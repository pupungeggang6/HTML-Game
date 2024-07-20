function loopField() {
    if (menu === false) {
        if (state === '') {
            movePlayer()
            moveCamera()
        }
    }

    displayField()
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])
    context.strokeRect(UI.field.buttonInfo[0], UI.field.buttonInfo[1], UI.field.buttonInfo[2], UI.field.buttonInfo[3])
    context.fillText(`${varField.place}`, UI.field.textPlace[0], UI.field.textPlace[1])

    drawField()

    if (state === 'ConfirmAdventureStart' || state === 'ConfirmAdventureEnd') {
        drawConfirmAdventure()
    }

    if (state === 'AdventureStart') {
        drawAdventureStart()
    }

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
            } else if (state === 'ConfirmAdventureStart') {
                if (pointInsideRectArray(x, y, UI.confirmAdventure.buttonYes)) {
                    varAdventure.adventure = true
                    moveField()
                    state = 'AdventureStart'
                    adventureStart()
                    varSelected.start = -1
                } else if (pointInsideRectArray(x, y, UI.confirmAdventure.buttonNo)) {
                    state = ''
                }
            } else if (state === 'ConfirmAdventureEnd') {
                if (pointInsideRectArray(x, y, UI.confirmAdventure.buttonYes)) {
                    varAdventure.adventure = false
                    moveField()
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.confirmAdventure.buttonNo)) {
                    state = ''
                }
            } else if (state === 'AdventureStart') {
                for (let i = 0; i < 3; i++) {
                    if (pointInsideRectArray(x, y, UI.adventureStart.buttonSelectList[i])) {
                        varSelected.start = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.adventureStart.buttonStart)) {
                    if (varSelected.start != -1) {
                        state = ''
                    }
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
            } else if (key === 'e') {
                moveFieldKeyPress()
            }
        } else if (state === 'Info') {
            if (key === 'i') {
                state = ''
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