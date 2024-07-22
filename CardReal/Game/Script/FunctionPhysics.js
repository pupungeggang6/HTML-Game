function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function vector2Norm(vec2) {
    return Math.sqrt(vec2[0] * vec2[0] + vec2[1] * vec2[1])
}

function vector2Normalize(vec2) {
    let norm = Math.sqrt(vec2[0] * vec2[0] + vec2[1] * vec2[1])

    if (norm <= 0.001) return [0, 0]
    return [vec2[0] / norm, vec2[1] / norm]
}