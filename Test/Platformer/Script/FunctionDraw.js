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
    for (let i = 0; i < varField.wall.length; i++) {
        context.strokeRect(Math.floor(varField.wall[i][0] - varField.camera[0]), Math.floor(varField.wall[i][1] - varField.wall[1]), varField.wall[i][2], varField.wall[i][3])
    }

    context.strokeRect(Math.floor(varPlayer.position[0] - varField.camera[0] - 20), Math.floor(varPlayer.position[1] - varField.camera[1] - 20), 40, 40)
}