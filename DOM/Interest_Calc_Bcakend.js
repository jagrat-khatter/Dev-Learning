const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors()); // Use the cors middleware

app.get('/', function(req, res) {
    try {
        const p = parseInt(req.query.principal);
        const r = parseFloat(req.query.rate);
        const t = parseFloat(req.query.time);

        let ans = (p * r * t) / 100;
        return res.status(200).send(ans.toString());
    } catch (err) {
        res.status(404).json({
            msg: "There is something up with our servers"
        });
    }
});

app.listen(3000, function(req, res) {
    console.log(`App is listening on port ${3000}`);
});