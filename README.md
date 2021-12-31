## API Documentation

#### GET /api/envelopes 
    - Get All Envelopes
    - 200 OK

#### GET /api/envelopes/:id 
    - Get an id-specific envelope
    - 200 OK, 404 ID not found

#### POST /api/envelopes 
    - Create an envelope 
    - body: { id: int, name: string, budget: int }
    - 200 OK, 400 Body not complete 

#### PUT /api/envelopes/:id 
    - Change information of the existing id-specific envelope 
    - body: { name: string, budget: int}
    - 200 OK, 400 Body not complete

#### PUT /api/envelopes/:id/transfer
    - Transfer money from the existing id-specific envelope to another
    - body: { target: int (the envelopes database must have this target id), amount: int }
    - 200 OK, 404 ID/target not found, 400 Body not complete, Transfer to the same account, or Not enough budget
 
#### DELETE /api/envelopes
    - Delete all envelopes
    - 200 OK

#### DELETE /api/envelopes/:id
    - Delete the existing id-specific envelope
    - 200 OK
