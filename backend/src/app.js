import express from "express";
import cors from "cors";
import {router as mainShortRoutes} from "./routes/mainShort.routes.js";
import { getOriginalUrl } from "./controllers/mainShort.controllers.js";
const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'https://urlshortner.saksin.online'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use("/api", mainShortRoutes);
app.get("/:shortCode", getOriginalUrl);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});



export default app;