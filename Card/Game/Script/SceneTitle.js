function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Card', UI.title.textTitle[0], UI.title.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText('Erase Data', UI.title.textErase[0], UI.title.textErase[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Field'
                    state = ''
                    varField.place = varSession.place
                    varField.wall = JSON.parse(JSON.stringify(dataField[varField.place]['Wall']))
                    varField.thing = JSON.parse(JSON.stringify(dataField[varField.place]['Thing']))
                    varField.connection = JSON.parse(JSON.stringify(dataField[varField.place]['Connection']))
                    varField.village = JSON.parse(JSON.stringify(dataField[varField.place]['Village']))
                    varField.positionPlayer = JSON.parse(JSON.stringify(dataField[varField.place]['Spawn']))
                    varField.size = JSON.parse(JSON.stringify(dataField[varField.place]['Size']))

                } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                    eraseData()
                }
            }
        }
    }
}

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}