let canvas
let context

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Main'
let state = ''
let menu = false

let varInput = {
    jump : false,
    left : false,
    right : false,
    up : false,
    down : false,
    connect : false,
}

let varPlayer = {
    position : [80, 620],
    positionTemp : [80, 620],
    collision : ['N', 'N', 0, 0],
    speed : 240,
    velocity : [0, 0],

    ground : false,
    jumpNum : 1,
    jumpPower : -400,
    jumpTime : 0,
    ySpeed : 0,
}

let varField = {
    gravity : 800,
    wall : [[0, 640, 720, 80], [0, 320, 720, 80], [960, 80, 80, 640]],
    camera : [0, 0],
}