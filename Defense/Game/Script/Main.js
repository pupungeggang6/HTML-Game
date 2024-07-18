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
    gameFrameCurrent = Date.now()

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Level') {
        loopLevel()
    } else if (scene === 'Collection') {
        loopCollection()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Level') {
        mouseUpLevel(x, y, button)
    } else if (scene === 'Collection') {
        mouseUpCollection(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Level') {
        keyDownLevel(key)
    } else if (scene === 'Collection') {
        keyDownCollection(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Level') {
        keyUpLevel(key)
    } else if (scene === 'Collection') {
        keyUpCollection(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, line, col, url, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}