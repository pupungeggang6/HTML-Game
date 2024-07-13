function movePlayer() {
    if (varInput.left === true) {
        varField.positionPlayer[0] -= 200 * delta / 1000
    }

    if (varInput.right === true) {
        varField.positionPlayer[0] += 200 * delta / 1000
    }

    if (varInput.up === true) {
        varField.positionPlayer[1] -= 200 * delta / 1000
    }

    if (varInput.down === true) {
        varField.positionPlayer[1] += 200 * delta / 1000
    }
}

function moveCamera() {
    varField.camera[0] = varField.positionPlayer[0] - 640
    varField.camera[1] = varField.positionPlayer[1] - 360
}