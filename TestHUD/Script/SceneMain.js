function loopMain() {
    if (textPosition[0] > 800) {
        textPosition[0] = 0
    }
    textPosition[0] += 200 * delta / 1000
    aaa += 0.1 * delta / 1000

    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawScreen()
    drawHUD()
}

function mouseUpMain(x, y, button) {
    
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}