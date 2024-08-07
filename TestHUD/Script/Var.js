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
        vertex3D,
        vertex3DSoruce,
        fragment3D,
        fragment3DSource,
        vertexHUD,
        vertexHUDSource,
        fragmentHUD,
        fragmentHUDSource,
    },

    vbo : {
        vertex3D,
        vertexHUD
    },

    location : {

    },
}