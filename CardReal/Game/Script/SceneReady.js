function loopReady() {
    displayReady()
}

function displayReady() {
    drawSceneInit()

    context.fillText('Select Character', UI.ready.textTitle[0], UI.ready.textTitle[1])
    context.strokeRect(UI.ready.buttonBack[0], UI.ready.buttonBack[1], UI.ready.buttonBack[2], UI.ready.buttonBack[3])

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.ready.buttonCharacter[i][0], UI.ready.buttonCharacter[i][1], UI.ready.buttonCharacter[i][2], UI.ready.buttonCharacter[i][3])
    }

    if (varSelected.character != -1) {
        context.strokeStyle = 'Lime'
        context.strokeRect(UI.ready.buttonCharacter[varSelected.character][0], UI.ready.buttonCharacter[varSelected.character][1], UI.ready.buttonCharacter[varSelected.character][2], UI.ready.buttonCharacter[varSelected.character][3])
        context.strokeStyle = 'Black'
    }

    context.strokeRect(UI.ready.buttonStart[0], UI.ready.buttonStart[1], UI.ready.buttonStart[2], UI.ready.buttonStart[3])
    context.fillText('Start', UI.ready.textStart[0], UI.ready.textStart[1])
}

function mouseUpReady(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.ready.buttonBack)) {
                    scene = 'Title'
                    state = ''
                    varSelected.character = -1
                }
                
                for (let i = 0; i < 6; i++) {
                    if (pointInsideRectArray(x, y, UI.ready.buttonCharacter[i])) {
                        varSelected.character = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.ready.buttonStart)) {
                    if (varSelected.character != -1) {
                        scene = 'Game'
                        state = 'Start'
                        varSelected.character = -1
                        varSelected.start = -1
                        varField.positionPlayer = [0, 0]
                        varField.camera = [0, 0]
                        movePlayer()
                        moveCamera()
                    }
                }
            }
        }
    }
}

function keyDownReady(key) {

}

function keyUpReady(key) {

}