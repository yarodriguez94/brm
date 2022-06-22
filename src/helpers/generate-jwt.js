const  jwt =  require("jsonwebtoken");

const generateJWT = (userInfo) => {
  return new Promise((resolve, reject) => {
    const payload = { userInfo };

    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: "5m",
      },
      (err, token) => {
        if (err) {
          reject("Failed to generate token");
        } else {
            resolve( token );
        }
      }
    );
  });
};

module.exports = generateJWT;