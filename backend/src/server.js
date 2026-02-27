import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
});

import express from "express";
import microWinsRoutes from "./routes/microWins.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
app.use(express.json());

// Root health check route
app.get("/", (req, res) => {
    res.json({
        status: "API running"
    });
});

// API routes
app.use("/micro-wins", microWinsRoutes);

// Global error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});