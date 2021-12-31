const express = require('express');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const cors = require('cors');
const envelopes = require('./routes/envelopes.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: '*',
	})
);
app.use(errorhandler());
app.use(morgan('dev'));

// if (process.env.NODE_ENV === 'development') {
// 	// only use in development
// 	app.use(errorhandler());
// 	app.use(morgan('dev'));
// } else {
// 	app.use(morgan('combined'));
// }

app.use('/api/envelopes', envelopes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
