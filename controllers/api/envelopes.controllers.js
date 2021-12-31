const envelopes = require('../../envelopes');

let id = 6;

const getAllEnvelopes = (req, res) => {
	res.json(envelopes);
};

const getEnvelope = (req, res) => {
	const id = req.params.id;
	const envelope = envelopes.find((evl) => evl.id === parseInt(id));
	if (envelope) {
		res.json(envelope);
	} else {
		res.status(404).json({ msg: `Not found the envelope with id ${id}.` });
	}
};

const createEnvelope = (req, res) => {
	const { name, budget } = req.body;
	if (name && budget) {
		id++;
		envelopes.push({ id, name, budget });
		res.json(envelopes);
	} else {
		res.status(400).json({
			msg: `Not enough information. Please include both name and budget.`,
		});
	}
};

const changeEnvelope = (req, res) => {
	const id = req.params.id;
	const { name, budget } = req.body;
	const envelopeIndex = envelopes.findIndex((evl) => evl.id === parseInt(id));
	if (envelopeIndex !== -1) {
		envelopes[envelopeIndex].name = name;
		envelopes[envelopeIndex].budget = budget;
		res.json(envelopes);
	} else if (!(name && budget)) {
		res.status(400).json({
			msg: `Not enough information. Please include both name and budget.`,
		});
	} else {
		res.status(404).json({ msg: `Not found the envelope with id ${id}.` });
	}
};

const deleteAllEnvelopes = (req, res) => {
	envelopes.length = 0;
	// res.sendStatus(204);
};

const deleteEnvelope = (req, res) => {
	const id = req.params.id;
	const envelopeIndex = envelopes.findIndex((evl) => evl.id === parseInt(id));
	if (envelopeIndex !== -1) {
		envelopes.splice(envelopeIndex, 1);
		// res.sendStatus(204);
		res.json(envelopes);
	} else {
		res.status(404).json({ msg: `Not found the envelope with id ${id}.` });
	}
};

module.exports = {
	getAllEnvelopes,
	getEnvelope,
	createEnvelope,
	changeEnvelope,
	deleteAllEnvelopes,
	deleteEnvelope,
};
