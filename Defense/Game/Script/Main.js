window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    loadImage()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameInstance = requestAnimationFrame(loop)
}

function keyDown(event) {

}

function keyUp(event) {

}

function mouseUp(event) {

}

function errorHandle(err, line, col, url, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {

}