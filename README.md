# Blockchain Data

Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.

## Getting Started

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Deploy your project

- Use NPM to install the dependencies.
```
npm install .
```

- Run
```
npm start
```

### Testing
```
npm test
```

## Web Services
### Framework
[express.js](https://expressjs.com/)

### API
- GET Block Information

Endpoint
```
http://localhost:8000/block/{blockHeight}
```
Request: None

Response: application/json Block
```
Response Example:
{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}
```

- POST add Block

Endpoint
```
http://localhost:8000/block
```
Request: {"body":"block body contents"}

Response: application/json Created Block 
```
Response Example:
{"hash":"9327355aa9523e3e41ffc8b9cdb566591b259fd5ed017a16450c22f4b6a2c258","height":2,"body":"block body contents","time":"1531787866","previousBlockHash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90"}
```