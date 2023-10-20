const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://tg1489:RUBYruby2808!!@cluster0.hr6x6af.mongodb.net/lincoln-pto'
);

module.exports = mongoose.connection;

// const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize('lincoln_pto', 'root', 'rootpassword', {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;
