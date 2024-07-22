function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    if (state === 'GameStart' || state === 'GameStartConfirm') {
        drawGameStart()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'GameStart') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = 'GameStartConfirm'
                }

                for (let i = 0; i < 3; i++) {
                    if (pointInsideRectArray(x, y, UI.game.start.buttonSelectList[i])) {
                        if (varSelected.startCardChange[i] === true) {
                            varSelected.startCardChange[i] = false
                        } else {
                            varSelected.startCardChange[i] = true
                        }
                    }
                }
            } else if (state === 'GameStartConfirm') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    gameStartCardChange()
                    state = ''
                }
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}
