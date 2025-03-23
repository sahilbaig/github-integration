import express from "express";
const app = express()
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ "message": "success" })

})
// testing a small change
app.post('/webhook', (req, res) => {
    // Log the event type and payload
    console.log('Webhook received!');
    console.log('Event:', req.headers['x-github-event']);
    console.log('Payload:', req.body);

    // Send a success response to GitHub
    res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});