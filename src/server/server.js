const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001; 

const apiKey = process.env.OPENAI_API_KEY;

app.use(bodyParser.json());

app.post('/generate-prediction', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: text,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        res.send({ prediction: response.data.choices[0].text });
    } catch (error) {
        res.status(500).send("Error in generating prediction");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
