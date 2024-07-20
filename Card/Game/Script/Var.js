let canvas
let context

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Title'
let state = ''
let menu = false

let varInput = {
    left : false,
    right : false,
    up : false,
    down : false
}

let varSession = {
    
}

let varSelected = {
    start : -1,
}

let varField = {
    place : 'HomeTown',
    village : true,
    emeny : [],

    wall : [],
    thing : [],
    connection : [],

    positionPlayer : [0, 0],
    camera : [0, 0],
    destinationPlace : '',
    destinationPosition : [0, 0]
}

let varPlayer = {
    collection : {
        card : [],
        equipment : [],
        item : [],
    },

    deck : [
        [1, 1, 2, 2, 3, 3]
    ],
}

let varAdventure = {
    adventure : false,
}

let varGame = {

}