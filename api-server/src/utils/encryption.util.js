const {ENCRYPTION} = require('../configs/main.config')
const bcrypt = require('bcrypt')
const crypto = require('crypto');

const key = crypto
    .createHash('sha512')
    .update(ENCRYPTION.KEY)
    .digest('hex')
    .substring(0, 32)
const encryptionIV = crypto
    .createHash('sha512')
    .update(ENCRYPTION.IV)
    .digest('hex')
    .substring(0, 16)

exports.encryptData = (data) => {
    const cipher = crypto.createCipheriv(ENCRYPTION.ALGORITHM, key, encryptionIV)
    return Buffer.from(
        cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
    )
}

exports.decryptData = (encryptedData) => {
    const buff = Buffer.from(encryptedData, 'hex')
    const decipher = crypto.createDecipheriv(ENCRYPTION.ALGORITHM, key, encryptionIV)
    return (
        decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')
    )
}

exports.bcryptHash = (data, round = 10) => {
    return bcrypt.hash(data, round)
}