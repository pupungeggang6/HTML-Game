function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.start.rect[0], UI.start.rect[1], UI.start.rect[2], UI.start.rect[3])
    context.strokeRect(UI.start.rect[0], UI.start.rect[1], UI.start.rect[2], UI.start.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Select Card to Change', UI.start.textTitle[0], UI.start.textTitle[1])

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.start.buttonCardChange[i][0], UI.start.buttonCardChange[i][1], UI.start.buttonCardChange[i][2], UI.start.buttonCardChange[i][3])
    }

    context.strokeRect(UI.start.buttonStart[0], UI.start.buttonStart[1], UI.start.buttonStart[2], UI.start.buttonStart[3])
    context.fillText('Start', UI.start.textStart[0], UI.start.textStart[1])
}