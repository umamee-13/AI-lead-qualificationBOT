// Run with: npm start or node index.js

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const startChat = require("./chatSimulator");

const app = express();
app.use(bodyParser.json());

app.post("/start-chat", async (req, res) => {
  const lead = req.body;
  try {
    const result = await startChat(lead);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});