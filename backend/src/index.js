import dotenv from "dotenv";
import app from "./app.js";
import client from "./db/main.db.js";

dotenv.config({path:"../../.env"});
// import "./db/main.db.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected to MongoDB");

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}
startServer();
