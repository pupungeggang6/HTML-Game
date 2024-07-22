function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPaused[0], UI.menu.textPaused[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume [R]', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit [E]', UI.menu.textExit[0], UI.menu.textExit[1])
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

function drawGameLower() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.lower.rect[0], UI.game.lower.rect[1], UI.game.lower.rect[2], UI.game.lower.rect[3])
    context.strokeRect(UI.game.lower.rect[0], UI.game.lower.rect[1], UI.game.lower.rect[2], UI.game.lower.rect[3])
    context.fillStyle = 'Black'

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], UI.game.lower.hand[i][2], UI.game.lower.hand[i][3])
    }

    context.strokeRect(UI.game.lower.cardBack[0], UI.game.lower.cardBack[1], UI.game.lower.cardBack[2], UI.game.lower.cardBack[3])
}

function drawField() {
    for (let i = 0; i < 36; i++) {
        for (let j = 0; j < 64; j++) {
            context.drawImage(img.grass, Math.floor(j * 40 - varField.camera[0] - 1280), Math.floor(i * 40 - varField.camera[1] - 720))
        }
    }

    if (varField.markActive === true) {
        context.drawImage(img.mark, Math.floor(varField.mark[0] - varField.camera[0] - 20), Math.floor(varField.mark[1] - varField.camera[1] - 20))
    }

    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20), 40, 40)
}