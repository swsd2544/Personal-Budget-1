API Documentation

GET /api/envelopes 
    - Get All Envelopes

GET /api/envelopes/:id 
    - Get an id-specific envelope

POST /api/envelopes 
    - Create an envelope 
    - body: { id: int, name: string, budget: int }

PUT /api/envelopes/:id 
    - Change information of the existing id-specific envelope 
    - body: { name: string, budget: int}

PUT /api/envelopes/:id/transfer
    - Transfer money from the existing id-specific envelope to another
    - body: { target: int (the envelopes database must have this target id), amount: int }

DELETE /api/envelopes
    - Delete all envelopes

DELETE /api/envelopes/:id
    - Delete the existing id-specific envelope
