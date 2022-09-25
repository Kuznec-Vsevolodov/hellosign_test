const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/hello-sign-test', (req, res) => {
    var data = req.body.json;
    console.log("Input payload of the event-----", data);
    res.status(200).send('Hello API Event Received');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});