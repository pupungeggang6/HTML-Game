let canvas
let gl
let canvasSample
let contextSample

let scene = 'Main'
let state = ''

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let glVar = {
    shader : {
        vertex3D : null,
        vertex3DSource : null,
        fragment3D : null,
        fragment3DSource : null,
        vertexHUD : null,
        vertexHUDSource : null,
        fragmentHUD : null,
        fragmentHUDSource : null,
        program3D : null,
        programHUD : null
    },

    vbo : null,
    bt : null,

    location : {
        color3D : null,
        textureHUD : null,
        vertex3D : null,
        vertexHUD : null
    },
}

let texture = {
    test : {
        canvas : null,
        context : null,
        texture : null,
    },
}

let textPosition = [0, 24]