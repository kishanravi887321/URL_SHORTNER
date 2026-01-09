import express from "express";
import {router as mainShortRoutes} from "./routes/mainShort.routes.js";

const app = express();
app.use(express.json());

app.use("/api", mainShortRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;