window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    gl = canvas.getContext('webgl2')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    glInit()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameInstance = requestAnimationFrame(loop)
}

function glInit() {
    glVar.shader.vertex3DSource = `
        attribute vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `

    glVar.shader.fragment3DSource = `
        precision mediump float;
        uniform vec4 u_color;

        void main() {
            gl_FragColor = u_color;
        }
    `

    glVar.shader.vertexHUDSource = `
        attribute vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `

    glVar.shader.fragmentHUDSource = `
        precision mediump float;
        uniform vec4 u_color;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        }
    `

    glVar.shader.vertex3D = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(glVar.shader.vertex3D, glVar.shader.vertex3DSource)
    gl.compileShader(glVar.shader.vertex3D)
    glVar.shader.fragment3D = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(glVar.shader.fragment3D, glVar.shader.fragment3DSource)
    gl.compileShader(glVar.shader.fragment3D)
    glVar.shader.program3D = gl.createProgram()
    gl.attachShader(glVar.shader.program3D, glVar.shader.vertex3D)
    gl.attachShader(glVar.shader.program3D, glVar.shader.fragment3D)
    
    glVar.shader.vertexHUD = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(glVar.shader.vertexHUD, glVar.shader.vertexHUDSource)
    gl.compileShader(glVar.shader.vertexHUD)
    glVar.shader.fragmentHUD = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(glVar.shader.fragmentHUD, glVar.shader.fragmentHUDSource)
    gl.compileShader(glVar.shader.fragmentHUD)
    glVar.shader.programHUD = gl.createProgram()
    gl.attachShader(glVar.shader.programHUD, glVar.shader.vertexHUD)
    gl.attachShader(glVar.shader.programHUD, glVar.shader.fragmentHUD)
    
    gl.linkProgram(glVar.shader.program3D)
    glVar.location.vertex3D = gl.getAttribLocation(glVar.shader.program3D, "a_position")
    glVar.location.color3D = gl.getUniformLocation(glVar.shader.program3D, "u_color")

    glVar.vbo.vertex3D = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo.vertex3D)
    gl.enableVertexAttribArray(glVar.location.vertex3D)
    gl.vertexAttribPointer(glVar.location.vertex3D, 3, gl.FLOAT, false, 0, 0)

    gl.linkProgram(glVar.shader.programHUD)
    glVar.location.vertexHUD = gl.getAttribLocation(glVar.shader.programHUD, "a_position")
    glVar.location.colorHUD = gl.getUniformLocation(glVar.shader.programHUD, "u_color")

    glVar.vbo.vertexHUD = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo.vertexHUD)
    gl.enableVertexAttribArray(glVar.location.vertexHUD)
    gl.vertexAttribPointer(glVar.location.vertexHUD, 3, gl.FLOAT, false, 0, 0)
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

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    if (scene === 'Main') {
        mouseUpMain(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Main') {
        keyDownMain(key)
    }
}

function keyUp(event) {
    let key = event.key

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