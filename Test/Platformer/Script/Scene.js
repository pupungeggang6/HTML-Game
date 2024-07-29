function loopMain() {
    if (menu === false) {
        if (state === '') {
            freeMove()
            //movePlayer()
            moveCamera()
        }
    }

    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawField()

    context.fillText(`${varPlayer.collision}`, 8, 8)
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}