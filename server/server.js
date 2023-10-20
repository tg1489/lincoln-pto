require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const sequelize = require('./config/connection');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

// Configure Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const startApolloServer = async () => {
  // Starting GraphQL Apollo Server
  await server.start();
  server.applyMiddleware({ app });

  // 2.) Open MongoDB Server:
  sequelize.once('open', () => {
    // 3.) Start Node.js Express Server:
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//   // Starting Database After GraphQL
//   sequelize.sync({ force: false }).then(() => {
//     // Starting Express Server after GraphQL & Database
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

startApolloServer();
