require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Check if server has key ───────────────────────────
app.get('/api/has-key', (req, res) => {
  res.json({ hasKey: !!process.env.GROQ_API_KEY });
});

// ── GROQ API (FREE!) ─────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages, system, apiKey } = req.body;
  // Use server env key first, fallback to user-provided key
  const key = process.env.GROQ_API_KEY || apiKey || '';
  if (!key) return res.status(401).json({ error: 'No API key. Please set GROQ_API_KEY in Railway environment variables.' });

  try {
    const { default: fetch } = await import('node-fetch');
    const groqMessages = [];
    if (system) groqMessages.push({ role: 'system', content: system });
    groqMessages.push(...messages);

    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: groqMessages,
        max_tokens: 2000,
        temperature: 0.7
      })
    });

    const data = await r.json();
    if (data.error) return res.status(400).json({ error: data.error.message });
    res.json({
      content: [{ type: 'text', text: data.choices?.[0]?.message?.content || 'No response' }]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Test Key ─────────────────────────────────────────
app.post('/api/test-key', async (req, res) => {
  const { apiKey } = req.body;
  const key = process.env.GROQ_API_KEY || apiKey || '';
  if (!key) return res.json({ ok: false, error: 'No key' });
  try {
    const { default: fetch } = await import('node-fetch');
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
      body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: 'Hi' }], max_tokens: 5 })
    });
    const d = await r.json();
    if (d.error) return res.json({ ok: false, error: d.error.message });
    res.json({ ok: true });
  } catch (err) {
    res.json({ ok: false, error: err.message });
  }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   AI YOG LAB — WORLD SUPER APP v6 ULTRA  ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║   http://localhost:${PORT}                    ║`);
  console.log(`║   Server Key: ${process.env.GROQ_API_KEY?'✅ SET':'❌ NOT SET — users need own key'}   ║`);
  console.log('╚══════════════════════════════════════════╝\n');
});
