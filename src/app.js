import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend CRUD API is running!");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

export default app;