import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
  // console.log(req.headers);
  const token = req.headers["authorization"] || req.headers["x-access-token"];

  // console.log(token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};
