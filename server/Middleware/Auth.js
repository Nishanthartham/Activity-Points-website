// const jwt =require('jsonwebtoken');
import jwt from "jsonwebtoken";

export const Auth = (req, res, next) => {
  const authHeader = req.header("authorization");
  console.log("inside auth header");
  //check token
  if (authHeader == null) {
    console.log("denied");

    return res.status(401).json({ error: "Access-denied" });
  }

  //check validity
  try {
    console.log("allowed" + authHeader);

    const verified = jwt.verify(authHeader, "token");
    // req.id = { username: verified.username }; //if verified the token will be decoded and the username of the user will be extracted and passed.
    return next();
  } catch (e) {
    res.status(401).json({ error: "Invalid-token" });
  }
};

// module.exports = { auth };
