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

function moveFieldKeyPress() {
    for (let i = 0; i < varField.connection.length; i++) {
        if (pointInsideRectArray(varField.positionPlayer[0], varField.positionPlayer[1], varField.connection[i][0])) {
            varField.destinationPlace = varField.connection[i][1]
            varField.destinationPosition = [varField.connection[i][2][0], varField.connection[i][2][1]]

            if (varAdventure.adventure === false && dataField[varField.connection[i][1]]['Village'] === false) {
                state = 'ConfirmAdventureStart'
            } else if (varAdventure.adventure === true && dataField[varField.connection[i][1]]['Village'] === true) {
                state = 'ConfirmAdventureEnd'
            } else {
                moveField()
            }
            
            break
        }
    }
}

function moveField() {
    varField.place = varField.destinationPlace
    varField.positionPlayer = [varField.destinationPosition[0], varField.destinationPosition[1]]
    varField.wall = dataField[varField.place]['Wall']
    varField.thing = dataField[varField.place]['Thing']
    varField.connection = dataField[varField.place]['Connection']
    varField.village = dataField[varField.place]['Village']
}

function adventureStart() {
    
}