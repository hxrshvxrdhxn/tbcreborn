const fs = require('fs');
const envFile = fs.readFileSync('.env.local', 'utf8');
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) process.env[match[1]] = match[2].replace(/^["']|["']$/g, '').trim();
});

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

async function testModel(modelName) {
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: modelName,
        max_tokens: 10,
        messages: [{ role: "user", content: "Hello" }]
      })
    });
    const text = await res.text();
    console.log(`Model ${modelName}:`, res.status, text);
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  await testModel("claude-2.1");
  await testModel("claude-instant-1.2");
}

run();
