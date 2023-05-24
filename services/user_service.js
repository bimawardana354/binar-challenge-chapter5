const fs = require('fs');
const path = require('path');
const USER_JSON_PATH = path.join(__dirname, '../data/user.json');

class UserService {
  #userJson;
  constructor() {
    this.#userJson = this.readFile();
  }

  listUser() {
    return this.#userJson;
  }

  listUsers() {
    let users = JSON.parse(fs.readFileSync(USER_JSON_PATH));
    return users;
  }

  detailUser(id) {
    const userFoundIndexId = this.findUserById(id);
    return this.#userJson[userFoundIndexId];
  }

  findUserById(id) {
    return this.#userJson.findIndex((user) => {
      return user.id == id;
    });
  }

  readFile() {
    const userRaws = fs.readFileSync(USER_JSON_PATH, 'utf-8');
    const userJson = JSON.parse(userRaws) || [];
    return userJson;
  }
}

module.exports = UserService;
