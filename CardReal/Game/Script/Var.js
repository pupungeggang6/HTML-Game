let canvas
let context

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Title'
let state = ''
let menu = false

let varSelected = {
    character : -1,
    start : -1,
}

let varField = {
    markActive : false,
    mark : [0, 0],

    positionPlayer : [0, 0],
    camera : [0, 0],
}

let varPlayer = {

}