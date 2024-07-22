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
    startCardChange : [false, false, false]
}

let varField = {
    place : 'HomeTown',

    village : true,
    size : [1280, 720],
    enemy : [],
    wall : [],
    thing : [],
    connection : [],
    enemyList : [],
    enemySpawn : [],

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

    deckCardList : [
        [1, 1, 2, 2, 3, 3]
    ],
    deckEnergyList : [],

    deckCard : [1, 1, 2, 2, 3, 3],
    deckEnergy : [1, 1, 1, 1, 1, 1]
}

let varAdventure = {
    adventure : false,

    equipment : [],
    deckCard : [],
    deckEnergy : [],
    item : [],
}

let varGame = {
    deckCard : [],
    deckEnergy : [],
    handCard : [],
    handEnergy : [],

    turn : 0,
    field : [],
}