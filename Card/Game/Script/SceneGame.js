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
            } else if (state === 'GameStartConfirm') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
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
