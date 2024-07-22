function gameStart() {
    varGame.turn = 0
    varGame.deckCard = JSON.parse(JSON.stringify(varAdventure.deckCard))
    varGame.deckEnergy = JSON.parse(JSON.stringify(varAdventure.deckEnergy))

    varSelected.startCardChange = [false, false, false]

    varGame.deckCard = arrayShuffle(varGame.deckCard)
}

function gameStartCardChange() {
    for (let i = 0; i < 3; i++) {
        if (varSelected.startCardChange[i] === true) {
            let temp = varGame.deckCard[i]
            varGame.deckCard[i] = varGame.deckCard[i + 3]
            varGame.deckCard[i + 3] = temp
        }
    }
}

function gameTurnZeroStart() {

}

function drawCard(condition) {
    if (condition === '') {

    }
}

function arrayShuffle(arr) {
    let arrOriginal = JSON.parse(JSON.stringify(arr))
    let arrShuffled = []

    while (arrOriginal.length > 0) {
        let index = Math.floor(Math.random() * arrOriginal.length)
        arrShuffled.push(arrOriginal.splice(index, 1)[0])
    }

    return arrShuffled
}