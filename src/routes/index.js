const newsRoute = require('./news');
const registerRoute = require('./register');
const loginRoute = require('./login');

function route(app) {

    app.use('/news', newsRoute);

    app.use('/register', registerRoute);

    app.use('/login', loginRoute);
    
    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;