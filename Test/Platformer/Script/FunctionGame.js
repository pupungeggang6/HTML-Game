function twoRectCollide(a, b) {
    let collision = ['N', 'N', 0, 0]
    
    let al = a[0]
    let ar = a[0] + a[2]
    let au = a[1]
    let ad = a[1] + a[3]
    let bl = b[0]
    let br = b[0] + b[2]
    let bu = b[1]
    let bd = b[1] + b[3]

    if (bl < al && al < br) {
        if (!(bd < au || bu > ad)) {
            collision[0] = 'R'
            collision[2] = br - al
        }
    }
    
    if (bl < ar && ar < br) {
        if (!(bd < au || bu > ad)) {
            collision[0] = 'L'
            collision[2] = ar - bl
        }
    }

    if (bu < au && au < bd) {
        if (!(br < al || bl > ar)) {
            collision[1] = 'D'
            collision[3] = bd - au
        }
    }
    
    if (bu < ad && ad < bd) {
        if (!(br < al || bl > ar)) {
            collision[1] = 'U'
            collision[3] = ad - bu
        }
    }

    return collision
}

function movePlayer() {
    varPlayer.positionTemp[0] = varPlayer.position[0]
    varPlayer.positionTemp[1] = varPlayer.position[1]

    varPlayer.position[0] = varPlayer.positionTemp[0]
    varPlayer.position[1] = varPlayer.positionTemp[1]
}

function freeMove() {
    varPlayer.positionTemp[0] = varPlayer.position[0]
    varPlayer.positionTemp[1] = varPlayer.position[1]

    if (varInput.left === true || varInput.right === true) {
        if (varInput.left === true) {
            varPlayer.velocity[0] = -200
        } else if (varInput.right === true) {
            varPlayer.velocity[0] = 200
        }
    } else {
        varPlayer.velocity[0] = 0
    }

    if (varInput.up === true || varInput.down === true) {
        if (varInput.up === true) {
            varPlayer.velocity[1] = -200
        } else if (varInput.down === true) {
            varPlayer.velocity[1] = 200
        }
    } else {
        varPlayer.velocity[1] = 0
    }

    varPlayer.positionTemp[0] += varPlayer.velocity[0] * delta / 1000
    varPlayer.positionTemp[1] += varPlayer.velocity[1] * delta / 1000

    for (let i = 0; i < varField.wall.length; i++) {
        let tempCollision = twoRectCollide(varField.wall[i], [varPlayer.positionTemp[0] - 20, varPlayer.positionTemp[1] - 20, 40, 40])

        if (tempCollision[0] != 'N' || tempCollision[1] != 'N') {
            varPlayer.collision = tempCollision
        }

        if (tempCollision[0] == 'L') {
            varPlayer.positionTemp[0] += tempCollision[2] + 0.1
        }

        if (tempCollision[0] == 'R') {
            varPlayer.positionTemp[0] -= tempCollision[2] + 0.1
        }

        if (tempCollision[1] == 'U') {
            varPlayer.positionTemp[1] += tempCollision[3] + 0.1
        }

        if (tempCollision[1] == 'D') {
            varPlayer.positionTemp[1] -= tempCollision[3] + 0.1
        }
    }

    varPlayer.position[0] = varPlayer.positionTemp[0]
    varPlayer.position[1] = varPlayer.positionTemp[1]
}

function moveCamera() {
    
}