const rules = require('./real_estate_rules.json');

function classifyLead(response, industry) {
  const industryRules = rules.qualify_rules;
  const text = response.toLowerCase();

  for (const keyword of industryRules.hot) {
    if (text.includes(keyword)) return 'Hot Lead';
  }
  for (const keyword of industryRules.cold) {
    if (text.includes(keyword)) return 'Cold Lead';
  }
  for (const keyword of industryRules.invalid) {
    if (text.includes(keyword)) return 'Invalid Lead';
  }
  return 'Uncertain';
}

module.exports = classifyLead;
