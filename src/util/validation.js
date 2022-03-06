
export const emailValidationHandler = (email) => {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     return regEmail.test(email)
}

export const passwordValidationHandler = (password) => {
    let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
    return regPassword.test(password)
}
