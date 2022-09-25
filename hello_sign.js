import { helloSign_callback } from 'hellosign-sdk';


export function helloSign_callback(req, res, json) {
    var data = req.body.json;
    console.log("Input payload of the event-----", data);
    res.status(200).send('Hello API Event Received');
}