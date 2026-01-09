import { getOriginalUrl } from "../controllers/mainShort.controllers.js";
import { createShortUrl } from "../controllers/mainShort.controllers.js";
import express from "express";

const router = express.Router();

router.post("/shorten", createShortUrl);
// router.get("/:shortUrl", getOriginalUrl);

export { router };