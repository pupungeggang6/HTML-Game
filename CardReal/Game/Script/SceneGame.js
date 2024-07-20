function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    if (state === 'Start') {
        drawGameStart()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
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
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}