
class RegisterController {

    // [GET] /register
    index (req, res) {
        res.render('register');
    }
}

module.exports = new RegisterController;