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

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit', UI.menu.textExit[0], UI.menu.textExit[1])
}

function drawField() {
    for (let i = 0; i < varField.connection.length; i++) {
        context.strokeRect(Math.floor(varField.connection[i][0][0] - varField.camera[0]), Math.floor(varField.connection[i][0][1] - varField.camera[1]), varField.connection[i][0][2], varField.connection[i][0][3])
    }

    for (let i = 0; i < varField.enemy.length; i++) {
        context.strokeRect(Math.floor(varField.enemy[i]['Position'][0] - varField.camera[0]), Math.floor(varField.enemy[i]['Position'][1] - varField.camera[1]), 80, 80)
    }

    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20), 40, 40)
}

function drawInfo() {
    context.fillStyle = 'White'
    context.fillRect(UI.info.rect[0], UI.info.rect[1], UI.info.rect[2], UI.info.rect[3])
    context.strokeRect(UI.info.rect[0], UI.info.rect[1], UI.info.rect[2], UI.info.rect[3])
    context.fillStyle = 'Black'
    
    context.strokeRect(UI.info.buttonClose[0], UI.info.buttonClose[1], UI.info.buttonClose[2], UI.info.buttonClose[3])
}

function drawConfirmAdventure() {
    context.fillStyle = 'White'
    context.fillRect(UI.confirmAdventure.rect[0], UI.confirmAdventure.rect[1], UI.confirmAdventure.rect[2], UI.confirmAdventure.rect[3])
    context.strokeRect(UI.confirmAdventure.rect[0], UI.confirmAdventure.rect[1], UI.confirmAdventure.rect[2], UI.confirmAdventure.rect[3])
    context.fillStyle = 'Black'

    if (state === 'AdventureConfirmStart') {
        context.fillText('Start adventure?', UI.confirmAdventure.textTitle[0], UI.confirmAdventure.textTitle[1])
    } else {
        context.fillText('End adventure?', UI.confirmAdventure.textTitle[0], UI.confirmAdventure.textTitle[1])
    }

    context.strokeRect(UI.confirmAdventure.buttonYes[0], UI.confirmAdventure.buttonYes[1], UI.confirmAdventure.buttonYes[2], UI.confirmAdventure.buttonYes[3])
    context.fillText('Yes', UI.confirmAdventure.textYes[0], UI.confirmAdventure.textYes[1])
    context.strokeRect(UI.confirmAdventure.buttonNo[0], UI.confirmAdventure.buttonNo[1], UI.confirmAdventure.buttonNo[2], UI.confirmAdventure.buttonNo[3])
    context.fillText('No', UI.confirmAdventure.textNo[0], UI.confirmAdventure.textNo[1])
}

function drawAdventureStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.adventureStart.rect[0], UI.adventureStart.rect[1], UI.adventureStart.rect[2], UI.adventureStart.rect[3])
    context.strokeRect(UI.adventureStart.rect[0], UI.adventureStart.rect[1], UI.adventureStart.rect[2], UI.adventureStart.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Select start equipment', UI.adventureStart.textTitle[0], UI.adventureStart.textTitle[1])
    
    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.adventureStart.buttonSelectList[i][0], UI.adventureStart.buttonSelectList[i][1], UI.adventureStart.buttonSelectList[i][2], UI.adventureStart.buttonSelectList[i][3])
    }

    if (varSelected.start != -1) {
        context.strokeStyle = 'Lime'
        context.strokeRect(UI.adventureStart.buttonSelectList[varSelected.start][0], UI.adventureStart.buttonSelectList[varSelected.start][1], UI.adventureStart.buttonSelectList[varSelected.start][2], UI.adventureStart.buttonSelectList[varSelected.start][3])
        context.strokeStyle = 'Black'
    }

    context.strokeRect(UI.adventureStart.buttonStart[0], UI.adventureStart.buttonStart[1], UI.adventureStart.buttonStart[2], UI.adventureStart.buttonStart[3])
    context.fillText('Start', UI.adventureStart.textStart[0], UI.adventureStart.textStart[1])
}

function drawGameStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.strokeRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.fillStyle = 'Black'

    if (state === 'GameStart') {
        context.fillText('Select Cards to Change.', UI.game.start.textTitle[0], UI.game.start.textTitle[1])
    } else if (state === 'GameStartConfirm') {
        context.fillText('Press start button', UI.game.start.textTitle[0], UI.game.start.textTitle[1])
    }

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.game.start.buttonSelectList[i][0], UI.game.start.buttonSelectList[i][1], UI.game.start.buttonSelectList[i][2], UI.game.start.buttonSelectList[i][3])
        if (varSelected.startCardChange[i] === true) {
            context.strokeStyle = 'Lime'
            context.strokeRect(UI.game.start.buttonSelectList[i][0], UI.game.start.buttonSelectList[i][1], UI.game.start.buttonSelectList[i][2], UI.game.start.buttonSelectList[i][3])
            context.strokeStyle = 'Black'
        }
    }

    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])

    if (state === 'GameStart') {
        context.fillText('Change', UI.game.start.textStart[0], UI.game.start.textStart[1])
    } else if (state === 'GameStartConfirm') {
        context.fillText('Start', UI.game.start.textStart[0], UI.game.start.textStart[1])
    }
}