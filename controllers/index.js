module.exports = (app) => {
  app.use('/', require('./web'));
  app.use('/users', require('./users'));
};
