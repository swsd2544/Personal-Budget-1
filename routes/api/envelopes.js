const express = require('express');
const envelopesController = require('../../controllers/api/envelopes.controllers');
const router = express.Router();

// Return all envelopes
router.get('/', envelopesController.getAllEnvelopes);

// Return an id-specific envelope
router.get('/:id', envelopesController.getEnvelope);

// Create a new envelope
router.post('/', envelopesController.createEnvelope);

// Change an id-specific envelope information
router.put('/:id', envelopesController.changeEnvelope);

// Transfer money from one envelope to another
router.put('/:id/transfer', envelopesController.transferMoney);

// Delete all envelopes
router.delete('/', envelopesController.deleteAllEnvelopes);

// Delete an id-specific envelope
router.delete('/:id', envelopesController.deleteEnvelope);

module.exports = router;
