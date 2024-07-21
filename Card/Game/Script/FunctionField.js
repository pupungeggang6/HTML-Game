function movePlayer() {
    if (varInput.left === true) {
        varField.positionPlayer[0] -= 200 * delta / 1000
    }

    if (varInput.right === true) {
        varField.positionPlayer[0] += 200 * delta / 1000
    }

    if (varInput.up === true) {
        varField.positionPlayer[1] -= 200 * delta / 1000
    }

    if (varInput.down === true) {
        varField.positionPlayer[1] += 200 * delta / 1000
    }
}

function moveCamera() {
    varField.camera[0] = varField.positionPlayer[0] - 640
    varField.camera[1] = varField.positionPlayer[1] - 360
}

function interactKeyPress() {
    for (let i = 0; i < varField.connection.length; i++) {
        if (pointInsideRectArray(varField.positionPlayer[0], varField.positionPlayer[1], varField.connection[i][0])) {
            varField.destinationPlace = varField.connection[i][1]
            varField.destinationPosition = [varField.connection[i][2][0], varField.connection[i][2][1]]

            if (varAdventure.adventure === false && dataField[varField.connection[i][1]]['Village'] === false) {
                state = 'AdventureConfirmStart'
            } else if (varAdventure.adventure === true && dataField[varField.connection[i][1]]['Village'] === true) {
                state = 'AdventureConfirmEnd'
            } else {
                moveField()
            }
            
            break
        }
    }

    for (let i = 0; i < varField.enemy.length; i++) {
        if (pointInsideRect(varField.positionPlayer[0], varField.positionPlayer[1], varField.enemy[i]['Position'][0], varField.enemy[i]['Position'][1], 40, 40)) {
            scene = 'Game'
            state = 'GameStart'
        }
    }
}

function moveField() {
    varField.place = varField.destinationPlace
    varField.wall = JSON.parse(JSON.stringify(dataField[varField.place]['Wall']))
    varField.thing = JSON.parse(JSON.stringify(dataField[varField.place]['Thing']))
    varField.connection = JSON.parse(JSON.stringify(dataField[varField.place]['Connection']))
    varField.village = JSON.parse(JSON.stringify(dataField[varField.place]['Village']))
    varField.size = JSON.parse(JSON.stringify(dataField[varField.place]['Size']))
    varField.enemyList = JSON.parse(JSON.stringify(dataField[varField.place]['EnemyList']))
    varField.enemySpawn = JSON.parse(JSON.stringify(dataField[varField.place]['EnemySpawn']))

    if (varField.village === false) {
        varField.enemy = []
        let tempEnemySpawn = JSON.parse(JSON.stringify(varField.enemySpawn))
        let tempEnemySpawnSelected = []

        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * tempEnemySpawn.length)
            tempEnemySpawnSelected.push(tempEnemySpawn.splice(index, 1)[0])
        }

        for (let i = 0; i < 3; i++) {
            let enemyID = varField.enemyList[Math.floor(Math.random() * varField.enemyList.length)]
            let enemyPosition = [tempEnemySpawnSelected[i][0] * 40, tempEnemySpawnSelected[i][1] * 40]
            let tempEnemy = {'Position' : [enemyPosition[0], enemyPosition[1]], 'ID' : enemyID}
            varField.enemy.push(tempEnemy)
        }
    }
}

function adventureStart() {
    varAdventure.deckCard = []
    varAdventure.deckEnergy = []

    for (let i = 0; i < varPlayer.deckCard.length; i++) {
        varAdventure.deckCard.push(JSON.parse(JSON.stringify(dataCard[varPlayer.deckCard[i]])))
    }

    for (let i = 0; i < varPlayer.deckEnergy.length; i++) {
        varAdventure.deckEnergy.push(JSON.parse(JSON.stringify(dataCard[varPlayer.deckEnergy[i]])))
    }
}
