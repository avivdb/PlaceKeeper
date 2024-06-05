
function createUser(form) {
    const formData = new FormData(form)
    console.log('formData:', formData);

    const newUser = {}

    formData.forEach((value, key) => {
        newUser[key] = value
    })

    return newUser
}

