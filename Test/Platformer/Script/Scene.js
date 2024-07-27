function loopMain() {
    if (menu === false) {
        if (state === '') {
            movePlayer()
            moveCamera()
        }
    }

    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawField()

    context.fillText(`${varPlayer.positionTemp[1]}`, 8, 8)
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}