const envelopes = require('../envelopes');

let id = 6;

const getAllEnvelopes = (req, res) => {
	res.json(envelopes);
};

const getEnvelope = (req, res) => {
	res.json(envelopes[req.envelopeIndex]);
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
	const { name, budget } = req.body;
	if (!(name && budget)) {
		res.status(400).json({
			msg: `Not enough information. Please include both name and budget.`,
		});
	} else {
		envelopes[req.envelopeIndex].name = name;
		envelopes[req.envelopeIndex].budget = budget;
		res.json(envelopes);
	}
};

const deleteAllEnvelopes = (req, res) => {
	envelopes.length = 0;
	res.sendStatus(204);
};

const deleteEnvelope = (req, res) => {
	envelopes.splice(req.envelopeIndex, 1);
	res.json(envelopes);
};

const transferMoney = (req, res) => {
	const { target, amount } = req.body;
	const targetIndex = envelopes.findIndex((evl) => evl.id === parseInt(target));
	if (targetIndex === -1) {
		res
			.status(404)
			.json({ msg: `Not found the envelope with id '${target}'.` });
	} else if (req.envelopeIndex === targetIndex) {
		res.status(400).json({
			msg: `Sorry. You can't transfer money to the same account.`,
		});
	} else if (!(target && amount)) {
		res.status(400).json({
			msg: `Not enough information. Please include both name and budget.`,
		});
	} else if (envelopes[req.envelopeIndex].budget < amount) {
		res.status(400).json({
			msg: `Not enough budget. Please try again after replenish the envelope's budget.`,
		});
	} else {
		envelopes[req.envelopeIndex].budget -= amount;
		envelopes[targetIndex].budget += amount;
		res.json([envelopes[req.envelopeIndex], envelopes[targetIndex]]);
	}
};

module.exports = {
	getAllEnvelopes,
	getEnvelope,
	createEnvelope,
	changeEnvelope,
	deleteAllEnvelopes,
	deleteEnvelope,
	transferMoney,
};
