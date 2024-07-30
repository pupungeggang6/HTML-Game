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
    jumpLock : true,
    jumping : false,
    jumpFirst : false,
    jumpTime : 0,
}

let varField = {
    gravity : 1600,
    terminalSpeed : 800,
    wall : [[40, 640, 160, 40], [280, 600, 160, 40], [560, 520, 160, 40], [840, 520, 40, 40], [1000, 520, 160, 40], [1160, 400, 40, 160]],
    camera : [0, 0],
}

let displayRect = [80, 620, 40, 40]