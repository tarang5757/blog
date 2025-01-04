import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
const app = express();

//middleware parses  ubcinubg hsib reqests. it is a generic middleware applied to all incoming requests.
app.use(express.json());

//This means that all routes defined in postRoutes (which is posts.js) are prefixed with /api/posts.
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
  console.log("connected!");
});
