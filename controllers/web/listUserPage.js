const UserService = require('../../services/user_service');

module.exports = (req, res) => {
  const as = new UserService();
  const listUsers = as.listUser();

  res.render('user', {
    users: listUsers,
  });
};
