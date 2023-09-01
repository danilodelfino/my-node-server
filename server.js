const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('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');

const app = express();

app.use(bodyParser.json());

// Route to create a SetupIntent for adding a debit card
app.post('/create-setup-intent', async (req, res) => {
  try {
    const setupIntent = await stripe.setupIntents.create();
    res.json({ setupIntent });
  } catch (error) {
    res.status(500).json({ error: { message: error.message } });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});