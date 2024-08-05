let envGlobal = {}

function onButtonRunClicked() {
    let text = document.getElementById('TextRun').value

    document.getElementById('TextRunResult').innerHTML += `<br> >>> ${text}`
    document.getElementById('TextRunResult').innerHTML += `<br>${JSON.stringify(parseText(text))}`

    let result = run(parseText(text), envGlobal)
    document.getElementById('TextRunResult').innerHTML += `<br>${JSON.stringify(result)}`

    envGlobal = result[1]
}

function parseText(text) {
    let stackText = ''
    let stack = []
    let resultFinal = []

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            if (stackText.length > 0) {
                stack.push(stackText)
                stackText = ''
            }
        } else if (text[i] === '(') {
            if (stackText.length > 0) {
                stack.push(stackText)
                stackText = ''
            }

            stack.push('(')
        } else if (text[i] === '|') {
            resultFinal.push(stack[0])
            stack = []
        } else if (text[i] === ')') {
            if (stackText.length > 0) {
                stack.push(stackText)
                stackText = ''
            }

            let tempResult = []

            while (stack.length > 0) {
                tempResult.unshift(stack.pop())

                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                    stack.push(tempResult)
                    break
                }
            }
        } else {
            stackText = stackText + text[i]
        }
    }

    resultFinal.push(stack[0])
    stack = []
    return resultFinal
}

function run(statement, env = {}) {
    let resultFinal = []

    for (let i = 0; i < statement.length; i++) {
        resultFinal = runSingleStatement(statement[i], env)
        env = resultFinal[1]
    }

    return resultFinal
}

function runSingleStatement(statement, env) {
    if (statement[0] === 'num') {
        return [parseInt(statement[1]), env]
    } else if (statement[0] === 'var') {
        return [env[statement[1]], env]
    } else if (statement[0] === 'let') {
        env[statement[1][1]] = runSingleStatement(statement[2], env)[0]
        return [null, env]
    } else if (statement[0] === 'add') {
        let value = runSingleStatement(statement[1], env)[0] + runSingleStatement(statement[2], env)[0]
        return [value, env]
    }
}