window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    saveInit()
    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Field') {
        loopField()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Field') {
        mouseUpField(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Field') {
        keyDownField(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Field') {
        keyUpField(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}