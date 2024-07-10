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

function drawField() {

}

function drawInfo() {

}