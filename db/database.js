const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite3'
});
try {
   await sequelize.authenticate('./test.db',sqlite3.OPEN_READWRITE(err));
    console.log('conection established')
} catch (error) {
    console.error('unable to connect to the database', error);
}

sequelize.close()