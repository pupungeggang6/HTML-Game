function movePlayer() {
    let diff = [varField.positionPlayer[0] - varField.mark[0], varField.positionPlayer[1] - varField.mark[1]]
    
    if (vector2Norm(diff) > 5) {
        let diffNormalized = vector2Normalize(diff)
        varField.positionPlayer[0] += diffNormalized[0] * 400 * delta / 1000
        varField.positionPlayer[1] += diffNormalized[1] * 400 * delta / 1000
    }
}

function moveCamera() {
    varField.camera[0] = varField.positionPlayer[0] - 640
    varField.camera[1] = varField.positionPlayer[1] - 360
}