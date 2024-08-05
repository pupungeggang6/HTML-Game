function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawField() {
    for (let i = 0; i < 14; i++) {
        context.strokeRect(UI.field.unit[i][0], UI.field.unit[i][1], UI.field.unit[i][2], UI.field.unit[i][3])
    }
}