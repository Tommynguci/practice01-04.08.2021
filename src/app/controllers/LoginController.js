const db = require('../config/dbconnect');

// db.connect();

var account = require('../models/Accounts')

class LoginController {

    // [GET] /login
    index (req, res) {

        db.getAccounts().then(result => {
            account = result.recordset; //Thiếu hàm đọc lần lượt tài khoản rồi kiếm tra
            for(let i = 0; i < account.length; i++) {
                // let account1 = account.password
                console.log(account[i].username + ' ' + account[i].password);
            }
            res.render('login', { account });
        });
    }
}

module.exports = new LoginController;