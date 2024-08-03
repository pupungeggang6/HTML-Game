function onButtonRunClicked() {
    let text = document.getElementById('TextRun').value
    let f = new Function(`return ${text}`)
    document.getElementById('TextRunResult').innerHTML = f()
}

function effectParse(effect) {
    let wordStack = ''
    for (let i = 0; i < effect.length; i++) {
        if (effect[i] === '(') {

        }
        wordStack += effect[i]
    }
}

function launchEffect(effect) {
    
}

function handleString(string) {
    let wordStack = ''
    let expression = []

    for (let i = 0; i < string.length; i++) {

    }

    return expression
}