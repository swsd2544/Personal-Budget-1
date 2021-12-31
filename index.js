const express = require('express');
const envelopes = require('./routes/api/envelopes');

const app = express();

app.use(express.json());

app.use('/api/envelopes', envelopes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
