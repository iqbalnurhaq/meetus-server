require('dotenv').config();

const {
  HOST_DB, USER_DB, PASSWORD_DB, DB_DB, DIALECT_DB,
} = process.env

module.exports = {
  "development": {
    "username": USER_DB,
    "password": PASSWORD_DB,
    "database": DB_DB,
    "host": HOST_DB,
    "dialect": DIALECT_DB
  },
  "test": {
    "username": USER_DB,
    "password": PASSWORD_DB,
    "database": DB_DB,
    "host": HOST_DB,
    "dialect": DIALECT_DB
  },
  "production": {
    "username": USER_DB,
    "password": PASSWORD_DB,
    "database": DB_DB,
    "host": HOST_DB,
    "dialect": DIALECT_DB
  }
}
