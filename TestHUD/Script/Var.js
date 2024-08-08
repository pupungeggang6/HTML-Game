let canvas
let gl

let scene = 'Main'
let state = ''

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let glVar = {
    shader : {
        vertex3D : null,
        vertex3DSoruce : null,
        fragment3D : null,
        fragment3DSource : null,
        vertexHUD : null,
        vertexHUDSource : null,
        fragmentHUD : null,
        fragmentHUDSource : null,
        program3D : null,
        programHUD : null
    },

    vbo : {
        vertex3D : null,
        vertexHUD : null
    },

    location : {
        color3D : null,
        colorHUD : null,
        vertex3D : null,
        vertexHUD : null
    },
}