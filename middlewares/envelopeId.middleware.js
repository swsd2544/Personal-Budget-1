const envelopes = require('../envelopes');

module.exports = (req, res, next) => {
	const id = req.params.id;
	const envelopeIndex = envelopes.findIndex((evl) => evl.id === parseInt(id));
	if (envelopeIndex === -1) {
		res.status(404).json({ msg: `Not found the envelope with id ${id}.` });
	} else {
		req.envelopeIndex = envelopeIndex;
		next();
	}
};
