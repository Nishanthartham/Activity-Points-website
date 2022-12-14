// const jwt =require('jsonwebtoken');
import jwt from "jsonwebtoken";

export const Auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  if (authHeader == null) {
    console.log("denied");

    return res.status(401).json({ error: "Access-denied" });
  }

  try {
    console.log("allowed");
    const verified = jwt.verify(authHeader, "tokens", function (err, decoded) {
      if (err) {
        console.log(err);
      } else {
        console.log("decoded" + decoded);
        req.id = decoded.username;
      }
    });
    console.log("verified");
    console.log("user" + verified);

    // const verified = jwt.verify({ username: authHeader }, "tokens");

    // req.id = { username: verified.username }; //if verified the token will be decoded and the username of the user will be extracted and passed.
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid-token" });
  }
};
