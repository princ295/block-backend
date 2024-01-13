import express, {Express, Request, Response} from 'express';
import "./core/db";


import { UserModel } from './models/UserModel';
const PORT = 3001

const app:Express = express();


app.listen(PORT, async() => {

  // const p = await  UserModel.find({}).exec()

  // const a = await UserModel.create({
  //   fullname: "Prince******88",
  //   username: "prince02",
  //   password: "12345",
  //   email: "prince@gmail.com"
  // })
  // await a.save()
  console.log(await UserModel.find({}), "*******8888")
  console.log('Server started on port 3000');
});