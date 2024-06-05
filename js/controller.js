function onRange(elRange) {
    const ageDisplay = document.querySelector('.age-display')
    ageDisplay.innerHTML = elRange

}

function onSubmit(event) {
    event.preventDefault()
    const form = document.getElementById('user-prefs-form')
    const user = createUser(form)
    saveToLocalStorage(user)
}

function onLoadUserPrefs() {
    const userPrefs = loadFromLocalStorage()

    const homePage = document.querySelector('body')
    const birthDate = document.querySelector('.birthDate')
    homePage.style.backgroundColor = userPrefs.bgColor
    homePage.style.color = userPrefs.txtColor
    birthDate.innerHTML = `Birthday: ${userPrefs.birthDate}`

}