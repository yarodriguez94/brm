// const  { response , request } = require('express');
const { users } = require("../models/users.js");
const generateJWT = require("../helpers/generate-jwt.js");
const bcryptjs = require('bcryptjs');


const loginUser = async (req, resp) => {
  try {
    const { username, password } = req.body;
    const products_model = await users.findAll({
      attributes: ["id", "firstname", "lastname"],
      where: {
        username: username,
        password: md5(password),
      },
    });

    if (products_model.length === 0) {
      resp.status(200).json("Username or password is invalid");
    }
    const token = await generateJWT(products_model);

    resp.json({
      status: "Success",
      token: token,
    });
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (req, resp) => {
  try {

    const body = req.body;
    const userData = {
      username: body.username,
      password: bcryptjs.hashSync(body.password,10),
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      rol: body.rol,
      phone: body.phone,
    };

    const createUSer = await users.create(userData);

    if ( !createUSer.id ){
      resp.status(500).json('Failed to created user');
    }

    resp.json({
      status: 'Success',
      msg : 'User created successfully',
    })

  } catch (err) {
    resp.status(500).json(err);
  }
};
module.exports = {
  loginUser,
  createUser,
};
