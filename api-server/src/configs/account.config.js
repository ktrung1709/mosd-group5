// TODO: this.attr not working
exports.username = {
    minLength: 5,
    maxLength: 15,
    regex: /^[a-zA-Z0-9]+$/,
    lengthErrMsg: `Username must be between ${this.minLength} and ${this.maxLength} characters`,
    regexErrMsg: "Username must contain only letters and numbers",
    existErrMsg: "Username already exists"
}

exports.email = {
    regex: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    regexErrMsg: "Invalid email address",
    existErrMsg: "Email already exists"
}

exports.password = {
    minLength: 8,
    invalidRegex: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
    hashRounds: 10,
    lengthErrMsg: `Password must be at least ${this.minLength} characters`,
    regexErrMsg: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
}

exports.activation = {
    fromEmail: "usersupport@movie.com",
    emailSubject: "Activate your account",
    expireTime: 1000 * 60 * 60 * 24 * 2 // 2 days
}