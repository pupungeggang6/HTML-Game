window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    gl = canvas.getContext('webgl2')
    canvasSample = document.getElementById('Sample')
    contextSample = canvasSample.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    glInit()
    textureInit()

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
        attribute vec2 a_texcoord;
        varying vec2 v_texcoord;
        
        void main() {
            gl_Position = a_position;
            v_texcoord = a_texcoord;
        }
    `

    glVar.shader.fragmentHUDSource = `
        precision mediump float;
        varying vec2 v_texcoord;
        uniform sampler2D u_texture;
        
        void main() {
            gl_FragColor = texture2D(u_texture, v_texcoord);
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
    gl.linkProgram(glVar.shader.program3D)
    
    glVar.shader.vertexHUD = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(glVar.shader.vertexHUD, glVar.shader.vertexHUDSource)
    gl.compileShader(glVar.shader.vertexHUD)
    glVar.shader.fragmentHUD = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(glVar.shader.fragmentHUD, glVar.shader.fragmentHUDSource)
    gl.compileShader(glVar.shader.fragmentHUD)
    glVar.shader.programHUD = gl.createProgram()
    gl.attachShader(glVar.shader.programHUD, glVar.shader.vertexHUD)
    gl.attachShader(glVar.shader.programHUD, glVar.shader.fragmentHUD)
    gl.linkProgram(glVar.shader.programHUD)
    
    glVar.vbo = gl.createBuffer()
    glVar.bt = gl.createBuffer()
    
    glVar.location.vertex3D = gl.getAttribLocation(glVar.shader.program3D, "a_position")
    glVar.location.color3D = gl.getUniformLocation(glVar.shader.program3D, "u_color")
    gl.enableVertexAttribArray(glVar.location.vertex3D)

    glVar.location.vertexHUD = gl.getAttribLocation(glVar.shader.programHUD, "a_position")
    glVar.location.textureHUD = gl.getAttribLocation(glVar.shader.programHUD, "a_texcoord")
    gl.enableVertexAttribArray(glVar.location.vertexHUD)
    gl.enableVertexAttribArray(glVar.location.textureHUD)
}

function textureInit() {
    texture.test.canvas = document.createElement('canvas')
    texture.test.context = texture.test.canvas.getContext('2d', {willReadFrequently : true})
    texture.test.canvas.width = 800
    texture.test.canvas.height = 600

    texture.test.texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture.test.texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious    

    if (scene === 'Main') {
        loopMain()
    }

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