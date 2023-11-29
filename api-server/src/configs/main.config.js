require('dotenv').config()

const {
    NODE_ENV,
    SERVER_HOST,
    SERVER_PORT,
    SECRET_KEY,
    SMTP_HOST,
    SMTP_PORT,
    ENCRYPTION_ALGORITHM,
    ENCRYPTION_KEY,
    ENCRYPTION_IV
} = process.env

module.exports = {
    NODE_ENV,
    SECRET_KEY,
    SERVER: {
        HOST: SERVER_HOST,
        PORT: SERVER_PORT
    },
    SMTP: {
        HOST: SMTP_HOST,
        PORT: SMTP_PORT
    },
    ENCRYPTION: {
        ALGORITHM: ENCRYPTION_ALGORITHM,
        KEY: ENCRYPTION_KEY,
        IV: ENCRYPTION_IV
    }
}