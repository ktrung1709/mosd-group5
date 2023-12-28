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
    ENCRYPTION_IV,
    DB_STRING,
    DB_NAME,
    EMAIL_FROM,
    EMAIL_PASSWORD
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
    },
    DB: {
        CON_STRING: DB_STRING,
        NAME: DB_NAME
    },
    MAIL: {
        FROM: EMAIL_FROM,
        PASSWORD: EMAIL_PASSWORD
    }
}