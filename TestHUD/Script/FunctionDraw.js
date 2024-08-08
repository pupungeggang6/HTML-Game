function drawSceneInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}

function drawSample() {

}

function drawScreen() {
    gl.enable(gl.DEPTH_TEST)
    gl.useProgram(glVar.shader.program3D)

    gl.uniform4f(glVar.location.color3D, 0.0, 1.0, 0.0, 1.0)
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo.vertex3D)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 1, 0, 1, 1, 1, 1]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}

function drawHUD() {
    gl.enable(gl.DEPTH_TEST)
    gl.useProgram(glVar.shader.programHUD)

    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.vbo.vertexHUD)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, -1, 0, 1, -1, -1, 1]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}