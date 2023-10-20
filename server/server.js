require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const sequelize = require('./config/connection');
// const cors = require('cors');
// const multer = require('multer');
// const Minio = require('minio');
const PORT = process.env.PORT || 3001;

const app = express();

// Configure Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Gamespot CORS Options
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   credentials: true,
// };

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors(corsOptions));

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// S3 client for image uploads
// const minioClient = new Minio.Client({
//   endPoint: 'localhost',
//   port: 9000,
//   useSSL: false,
//   accessKey: 'H0l0H20tREnQyTHtOzEl',
//   secretKey: 'of0jSdR4TbiZdcfB2QsV1otOKeQGjzugAQkhLIYW',
// });

// Configure multer to handle file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Define an endpoint to handle image uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   const bucketName = 'pictures';
//   const objectName = req.file.originalname;
//   const buffer = req.file.buffer;

//   minioClient.putObject(bucketName, objectName, buffer, (err, etag) => {
//     if (err) {
//       console.error('Error uploading file:', err);
//       res.status(500).json({ error: 'File upload failed' });
//     } else {
//       console.log('File uploaded successfully. ETag:', etag);
//       res.status(200).json({ message: 'File uploaded successfully' });
//     }
//   });
// });

// Gets the user saved avatar
// app.get('/api/getImage/:imageName', (req, res) => {
//   const bucketName = 'pictures';
//   const imageName = req.params.imageName;
//   const hardcodedImage = `1690904065182.jpeg`;

//   minioClient.getObject(bucketName, hardcodedImage, (err, dataStream) => {
//     if (err) {
//       console.error('Error fetching image:', err);
//       res.status(500).send('Error fetching image');
//     } else {
//       res.setHeader('Content-Type', 'image/jpeg'); // Set the appropriate content type
//       dataStream.pipe(res); // Pipe the data stream to the response
//     }
//   });
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Need this API in order to use .env on the client side for { React }
// app.get('/api/keys', async (req, res) => {
//   const rapidKey = process.env.RAPID_API;
//   const rawgKey = process.env.RAWG_API;

//   res.json({ rapidKey, rawgKey });
// });

const startApolloServer = async () => {
  // Starting GraphQL Apollo Server
  await server.start();
  server.applyMiddleware({ app });

  // Starting Database After GraphQL
  sequelize.sync({ force: false }).then(() => {
    // Starting Express Server after GraphQL & Database
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
