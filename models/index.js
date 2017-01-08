import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import _ from 'lodash';
import config from '../config/default';

let db = {};

// TODO - per-environment config
const sequelize = new Sequelize(config.postgres, { maxConcurrentQueries: 100 });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = _.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
