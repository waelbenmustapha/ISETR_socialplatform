import { con } from "../config/database.js";
import jwt from "jsonwebtoken";

export const checkUsersTable = async (req, res, next) => {
  // check if table exists
  const tableExists = await con.schema.hasTable("users");
  if (!tableExists) {
    // create table
    await con.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
    });
    next();
  } else {
    next();
  }
};

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
