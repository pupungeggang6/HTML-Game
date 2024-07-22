function loopGame() {
    displayGame()

    if (menu === false) {
        if (state === '') {
            movePlayer()
            moveCamera()
        }
    }
}

function displayGame() {
    drawSceneInit()

    drawField()
    drawGameLower()

    if (state === 'Start') {
        drawGameStart()
    }

    if (menu === true) {
        drawMenu()
    }

    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])
}

function mouseUpGame(x, y, button) {
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
            if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                menu = true
            }

            if (state === 'Start') {
                for (let i = 0; i < 3; i++) {
                    if (pointInsideRectArray(x, y, UI.game.start.buttonSelectList[i])) {
                        varSelected.start = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    if (varSelected.start != -1) {
                        state = ''
                    }
                }
            }
        }
    } else if (button === 2) {
        if (menu === false) {
            if (state === '') {
                varField.markActive = true
                varField.mark = [x + varField.camera[0], y + varField.camera[1]]
            }
        }
    }
}

function keyDownGame(key) {
}

function keyUpGame(key) {

}