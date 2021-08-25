const sql = require('mssql');

var config = {
    user: 'tommy',
    password: 'natuan',
    server: 'localhost',
    database: 'StoreBook',
    port: 1433,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};

async function connect() {
    try {
        await sql.connect(config);
        // make sure that any items are correctly URL encoded in the connection string
        console.log('connect successfully');
    } catch (err) {
        console.log('connect failure');
    }
};

async function getProducts() {
    try {
        let pool = await sql.connect(config);
        const products = await pool.query("select * from Products")
        return products;  
    }
    catch (error) {
        console.log(error);
    }
}

async function getProductID(id) {
    try {
        const products = await sql.query`select * from Products where id = ${id}`;
        return products;
    } catch (error) {
        console.log(error);
    }
};

async function getAccounts() {
    try {
        let pool = await sql.connect(config);
        const accounts = await pool.query("select * from Accounts")
        return accounts;  
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { 
    connect,
    getProducts,
    getProductID,
    getAccounts
};