const UserService = require('../../services/user_service');

module.exports = (req, res) => {
  const as = new UserService();

  res.status(200).json({
    message: 'list users',
    data: as.listUser(),
  });
};
