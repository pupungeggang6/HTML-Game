let canvas
let context

let gameLoop
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Main'
let state = ''

let varGame = {
    deckCard : [],
    deckCrystal : [],
    handCard : [],
    handCrystal : [],

    field : [null, null, null, null, null, null, null, null, null, null, null, null, null, null],

    stackEffect : [],
}

let tempRect = [0, 0, 40, 40]