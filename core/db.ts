

import mongoose, { ConnectOptions } from "mongoose";
mongoose.Promise = Promise;

mongoose.connect("mongodb+srv://dewanganprince02:pOcrCPrm801PpiS1@cluster0.zo70vzu.mongodb.net/node-app?retryWrites=true&w=majorityforEach", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
} as ConnectOptions).then(() => console.log("Connected")).catch(() => console.log("Error"))

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: ***********'));

export { db, mongoose }