import { con } from "../config/database.js";
import jwt from "jsonwebtoken";


export const checkJobTable = async (req, res, next) => {
  // check if table exists
  const tableExists = await con.schema.hasTable("jobs");
  if (!tableExists) {
    // create table
    await con.schema.createTable("jobs", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("description");
table.string("location");
table.string("company");
      table.string("image");
      table.string("type");
      table.dateTime("date").defaultTo(con.fn.now());
    });
    next();
  } else {
    next();
  }
};


export const checkFavoriTable = async (req, res, next) => {
  // check if table exists
  const tableExists = await con.schema.hasTable("favorie");
  if (!tableExists) {
    // create table
    await con.schema.createTable("favorie", (table) => {
      table.increments("id").primary();
      table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
      table.integer("job_id").references("id").inTable("jobs").onDelete("CASCADE");
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
