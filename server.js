const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Cipher has risen 🧠. Stark’s signal received.");
});

app.listen(PORT, () => {
  console.log(`Arcano Cipher Core running on port ${PORT}`);
});
