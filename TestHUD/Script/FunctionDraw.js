function drawSceneInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

}

function drawScreen() {
    gl.enable(gl.DEPTH_TEST)
    gl.useProgram(glVar.shader.program3D)

    gl.uniform4f(glVar.location.color3D, 0.0, 1.0, 0.0, 1.0)
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo)
    gl.vertexAttribPointer(glVar.location.vertex3D, 3, gl.FLOAT, false, 0, 0)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    contextSample.clearRect(0, 0, 200, 200)
    contextSample.drawImage(img.test, 0, 0)
}

function updateTexture() {
    texture.test.context.font = '32px neodgm'
    texture.test.context.textAlign = 'left'
    texture.test.context.textBaseline = 'top'
    texture.test.context.strokeStyle = 'Black'
    texture.test.context.clearRect(0, 0, 800, 600)

    texture.test.context.fillStyle = 'White'
    texture.test.context.fillRect(0, 0, 800, 80)
    texture.test.context.fillStyle = 'Black'
    texture.test.context.fillText('HUD', textPosition[0], textPosition[1])

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.test.canvas)
}

function drawHUD() {
    updateTexture()

    gl.disable(gl.DEPTH_TEST)
    gl.useProgram(glVar.shader.programHUD)

    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo)
    gl.vertexAttribPointer(glVar.location.vertexHUD, 2, gl.FLOAT, false, 0, 0)

    let tempRect = [0, 0, 800, 0, 0, 600, 0, 600, 800, 0, 800, 600]
    
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            tempRect[i] = tempRect[i] / 800 * 2 - 1
        } else {
            tempRect[i] = 600 - tempRect[i]
            tempRect[i] = tempRect[i] / 600 * 2 - 1
        }
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tempRect), gl.STATIC_DRAW)

    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bt)
    gl.vertexAttribPointer(glVar.location.textureHUD, 2, gl.FLOAT, false, 0, 0)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]), gl.STATIC_DRAW)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
}