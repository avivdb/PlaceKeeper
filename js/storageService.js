function saveToLocalStorage(item) {
    const str = JSON.stringify(item)
    localStorage.setItem('user-prefs', str)

}

function loadFromLocalStorage() {
    const user = localStorage.getItem('user-prefs')
    return user ? JSON.parse(user) : null
}