function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
}

function drawGameStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.strokeRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Select Start Equipment', UI.game.start.titleText[0], UI.game.start.titleText[1])

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.game.start.buttonSelectList[i][0], UI.game.start.buttonSelectList[i][1], UI.game.start.buttonSelectList[i][2], UI.game.start.buttonSelectList[i][3])
    }

    if (varSelected.start != -1) {
        context.strokeStyle = 'Lime'
        context.strokeRect(UI.game.start.buttonSelectList[varSelected.start][0], UI.game.start.buttonSelectList[varSelected.start][1], UI.game.start.buttonSelectList[varSelected.start][2], UI.game.start.buttonSelectList[varSelected.start][3])
        context.strokeStyle = 'Black'
    }

    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])
    context.fillText('Start', UI.game.start.textStart[0], UI.game.start.textStart[1])
}