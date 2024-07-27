function movePlayer() {
    varPlayer.positionTemp[0] = varPlayer.position[0]
    varPlayer.positionTemp[1] = varPlayer.position[1]

    // Horizontal
    if (varInput.left === true) {
        varPlayer.positionTemp[0] -= varPlayer.speed * delta / 1000
    }

    if (varInput.right === true) {
        varPlayer.positionTemp[0] += varPlayer.speed * delta / 1000
    }

    for (let i = 0; i < varField.wall.length; i++) {
        let leftWallRect = [varField.wall[i][0] + varField.wall[i][2] - 20, varField.wall[i][1], 40, varField.wall[i][3]]
        let rightWallRect = [varField.wall[i][0] - 20, varField.wall[i][1], 40, varField.wall[i][3]]

        if (pointInsideRectArray(varPlayer.positionTemp[0], varPlayer.positionTemp[1], leftWallRect)) {
            varPlayer.positionTemp[0] = varField.wall[i][0] + varField.wall[i][2] + 20
        }

        if (pointInsideRectArray(varPlayer.positionTemp[0], varPlayer.positionTemp[1], rightWallRect)) {
            varPlayer.positionTemp[0] = varField.wall[i][0] - 20
        }
    }

    // Vertical
    varPlayer.ySpeed += varField.gravity * delta / 1000

    if (varInput.up === true) {
        varPlayer.ySpeed = varPlayer.jumpPower
    }

    varPlayer.positionTemp[1] += varPlayer.ySpeed * delta / 1000

    // Celling, Ground Collide Detection
    for (let i = 0; i < varField.wall.length; i++) {
        let upperWallRect = [varField.wall[i][0] - 20, varField.wall[i][1] + varField.wall[i][3] - 20, varField.wall[i][2] + 40, 40]
        if (pointInsideRectArray(varPlayer.positionTemp[0], varPlayer.positionTemp[1], upperWallRect)) {
            varPlayer.positionTemp[1] = varField.wall[i][1] + varField.wall[i][3] + 20
            varPlayer.ySpeed = 0
        }

        let groundTouchRect = [varField.wall[i][0] - 20, varField.wall[i][1] - 20, varField.wall[i][2] + 40, 40]
        if (pointInsideRectArray(varPlayer.positionTemp[0], varPlayer.positionTemp[1], groundTouchRect) && varPlayer.ySpeed > 0) {
            varPlayer.ground = true
            varPlayer.positionTemp[1] = varField.wall[i][1] - 20
            varPlayer.ySpeed = 0
        }
    }

    varPlayer.position[0] = varPlayer.positionTemp[0]
    varPlayer.position[1] = varPlayer.positionTemp[1]
}

function moveCamera() {
    
}