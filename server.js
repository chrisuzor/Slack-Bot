const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('DB connection successful');
    })
    .catch((err) => {
      console.log('DB connection failed');
      console.log(err);
    });
  
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });