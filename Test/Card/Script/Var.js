let canvas
let context

let gameLoop
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Main'
let state = 'Start'
let menu = false

let game = {
    startCardSelect : [false, false, false],

    turn : 0,
    deckCard : [],
    deckCrystal : [],
    handCard : [],
    handCrystal : [],

    field : [

    ],

    enemyID : 0,
    enemyAction : [],
}