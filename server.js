const express = require('express');
const app = express();
const port = 4000;

app.get('/character', (req, res) => {
    res.json({
        name: "SpongeBob",
        job: "Fry Cook",
        location: "Krusty Krab"
    });
});

app.listen(port, () => {
    console.log(`Bikini Bottom server running at http://localhost:${port}`);
});
