const dotenv = require('dotenv');

const { connectDB } = require('./database');

dotenv.config({ path: './config.env' });
const app = require('./app');

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
