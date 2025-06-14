const askAI = require('./aiEngine');
const classifyLead = require('./classifier');

async function startChat(lead) {
  const questions = [`Hi ${lead.name}, how can I help you today?`];
  const messages = [lead.message];

  const aiResponse = await askAI(lead.message, lead.industry);
  messages.push(aiResponse);

  const classification = classifyLead(aiResponse, lead.industry);
  return {
    lead,
    classification,
    chat: messages,
  };
}

module.exports = startChat;
