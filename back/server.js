import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

import { db_conn } from "./config/database.js";
import userRoutes from "./routes/user_routes.js";
import resumeRoutes from"./routes/resume_routes.js";
import followerRoutes from "./routes/followers_routes.js";
import postRoutes from "./routes/post_routes.js";
import commentRoutes from "./routes/comment_routes.js";
import roomRoutes from "./routes/room_routes.js";
import shareRoutes from "./routes/share_routes.js";
import msgRoutes from "./routes/messages_routes.js";
import groupRoutes from "./routes/group_routes.js";
import { verifyToken } from "./middlewares/token_middleware.js";
import { chatsocket } from "./controllers/room_controller.js";

import jobRoutes from "./routes/job_routes.js";

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
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

const socket = io.of('/chat')

// socket.io
socket.on('connection', chatsocket);


// apis
app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/job",jobRoutes)
app.use("/api/follow", followerRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/share", shareRoutes);

db_conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
  httpServer.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
