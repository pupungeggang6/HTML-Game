function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawLevel() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            context.strokeRect(UI.level.buttonLevelStart[0] + UI.level.buttonLevelInterval[0] * j, UI.level.buttonLevelStart[1] + UI.level.buttonLevelInterval[1] * i, UI.level.buttonLevelSize[0], UI.level.buttonLevelSize[1])
        }
    }
}