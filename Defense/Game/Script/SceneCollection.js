function loopCollection() {
    displayCollection()
}

function displayCollection() {
    drawSceneInit()

    context.fillText('Collection', UI.collection.textTitle[0], UI.collection.textTitle[1])
    context.strokeRect(UI.collection.buttonBack[0], UI.collection.buttonBack[1], UI.collection.buttonBack[2], UI.collection.buttonBack[3])
}

function mouseUpCollection(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.collection.buttonBack)) {
                    scene = 'Level'
                    state = ''
                }
            }
        }
    }
}

function keyUpCollection(key) {

}

function keyDownCollection(key) {

}