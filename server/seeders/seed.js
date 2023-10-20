const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const sequelize = require('../config/connection');

const User = require('../models/User');

const userSeedData = require('./userSeeds.json');

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    User.bulkCreate(userSeedData).then(() => {
      console.log('🍓 Seeds planted in User table');
      process.exit(0);
    });
  });
};

seedDatabase();
