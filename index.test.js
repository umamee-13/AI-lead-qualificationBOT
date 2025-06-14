const askAI = require("./aiEngine");

(async () => {
  try {
    const response = await askAI("I'm interested in investing.", "finance");
    console.log("AI Response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();