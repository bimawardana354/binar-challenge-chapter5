const UserService = require('../../services/user_service');

module.exports = (req, res) => {
  const { id } = req.params;

  const as = new UserService();
  const detailUser = as.detailUser(id);

  res.status(200).json({
    message: 'Detail User',
    data: detailUser,
  });
};
