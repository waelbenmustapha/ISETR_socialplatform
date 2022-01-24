import express from "express";
import cors from "cors";

import { db_conn } from "./config/database.js";
import userRoutes from "./routes/user_routes.js";
import resumeRoutes from"./routes/resume_routes.js";
import { verifyToken } from "./middlewares/user_middleware.js";

const PORT = process.env.PORT || 5500;

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true,
    origin: "*",
  })
);

app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);


db_conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
