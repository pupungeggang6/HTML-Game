window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameInstance = requestAnimationFrame(loop)   
}

function loop() {
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Main') {
        loopMain()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (key === 'ArrowLeft') {
        varInput.left = true
        event.preventDefault()
    }

    if (key === 'ArrowRight') {
        varInput.right = true
        event.preventDefault()
    }

    if (key === 'ArrowUp') {
        varInput.up = true
        event.preventDefault()
    }

    if (key === 'ArrowDown') {
        varInput.down = true
        event.preventDefault()
    }

    if (key === ' ') {
        varInput.junp = true
        event.preventDefault()
    }

    if (scene === 'Main') {
        keyDownMain(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (key === 'ArrowLeft') {
        varInput.left = false
        event.preventDefault()
    }

    if (key === 'ArrowRight') {
        varInput.right = false
        event.preventDefault()
    }

    if (key === 'ArrowUp') {
        varInput.up = false
        event.preventDefault()
    }

    if (key === 'ArrowDown') {
        varInput.down = false
        event.preventDefault()
    }

    if (key === ' ') {
        varInput.junp = false
        event.preventDefault()
    }

    if (scene === 'Main') {
        keyUpMain(key)
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