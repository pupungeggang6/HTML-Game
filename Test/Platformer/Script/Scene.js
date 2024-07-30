function loopMain() {
    if (menu === false) {
        if (state === '') {
            //freeMove()
            movePlayer()
            checkArea()
            moveCamera()
        }
    }

    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawField()

    //context.fillText(`${varPlayer.collision} ${varPlayer.jumpTime}`, 8, 8)
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}