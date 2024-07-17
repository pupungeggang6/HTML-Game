function saveInit() {
    if (localStorage.getItem(fileName) === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    varSession = JSON.parse(localStorage.getItem(fileName))
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(varSession))
}

function loadData() {
    varSession = JSON.parse(localStorage.getItem(varSession))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    varSession = JSON.parse(localStorage.getItem(fileName))
}