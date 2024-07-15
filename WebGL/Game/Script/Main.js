window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    canvasUI = document.getElementById('ScreenUI')
    gl = canvas.getContext('webgl')
    contextUI = canvasUI.getContext('2d')

    canvasUI.addEventListener('mouseup', mouseUpUI, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    if (gl) {
        glInit()
    }

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameInstace = requestAnimationFrame(loop)
}

function glInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)
    //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}

function loop() {
    gameFrameCurrent = Date.now()

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUpUI(event) {
    let targetRect = canvasUI.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpUITitle(x, y, button)
    } else if (scene === 'Game') {
        mouseUpUIGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
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