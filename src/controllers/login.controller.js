// const  { response , request } = require('express');
// import { users } from "../models/users.js";
// import generateJWT from "../helpers/generate-jwt.js";
// import md5 from "md5";

 const loginUser = async (req , resp ) => {
  
  // app.use( express.json() );
  // console.log(JSON.stringify(req.headers));
  
  resp.send(req);
  // try {

  //   console.log(req.body);
  //   const {username , password} = req.body;
  //   console.log(body);
  //   const products_model = await users.findAll({
  //     attributes: ["id", "firstname", "lastname"],
  //     where: {
  //       username: body.username,
  //       password: md5(body.password),
  //     },
  //   });
    
  //   if (products_model.length === 0) {
  //     resp.status(200).json("Username or password is invalid");
  //   }
  //   const token = await generateJWT( products_model );

  //   resp.json({
  //     status:'Success',
  //     token: token,
  //   }
  //   )
    

  // } catch (e) {
  //   console.log(e)

  // }
};

 const createUser =  (req, resp) => {
  
  // console.log(req);
  resp.json(req.body);
  try {
  } catch (err) {
    console.log(err)
  }
};
module.exports = {
  loginUser,
  createUser
};
