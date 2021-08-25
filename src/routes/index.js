
const newsRoute = require('./news');
const registerRoute = require('./register');
const loginRoute = require('./login');
const productDetailRoute = require('./productDetail');

const db = require('../app/config/dbconnect');

db.connect();

var product = require('../app/models/Products');


function route(app) {

    app.use('/news', newsRoute);

    app.use('/register', registerRoute);

    app.use('/login', loginRoute);

    app.use('/product-detail', productDetailRoute);
    
    app.get('/', (req, res) => {
        
        db.getProducts().then(result => {
            product = result.recordset;
            res.render('home', { product });
        })
    });
}

module.exports = route;