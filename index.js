const express = require("express");
const app = express();
const port = 3000; // Internal port the app listens on *within* the container

app.get("/", (_, res) => {
    res.json({
        message:
            'BFP is short for Big Fish Paradigm. Let\'s say that we have an account with no 2FA. To ensure account safety, most people would suggest you to enable 2FA. But why stop there? Why not 3FA? Just in case 2FA gets bypassed; 4FA, maybe? This is where BFP comes to play. There is always a "bigger fish" than just employing the best FA ever. What if your phone gets stolen? What if your biometrics get stolen? Your face? When your phone gets stolen, you now have a bigger fish to handle than just "oh, no! My sweet sweet account!"',
    });
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
