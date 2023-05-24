const UserService = require('../../services/user_service');

const as = new UserService();
const users = as.listUsers();
let USERNAME = users.map((a) => a.username);
let PASSWORD = users.map((b) => b.password);

let message = '';

module.exports = (req, res) => {
  console.log(req.method);
  if (req.method == 'GET') {
    message = 'Please visit User page (localhost:3000/user) to view user data (username and password) for login, Thank you!';
    res.render('login', { message: message, classMessage: 'primary' });
    return;
  }

  if (req.method == 'POST') {
    const { username, password } = req.body;
    if (USERNAME.includes(username) && PASSWORD.includes(password)) {
      console.log('login success');
      message = 'Login successfully.';
      return res.render('login', { message: message, classMessage: 'success' });
    } else {
      console.log('login unsuccess');
      message = 'Login unsuccessful! Check your username and password';
      return res.render('login', { message: message, classMessage: 'danger' });
    }
  }
};
