import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 3013;

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Define a route to handle incoming POST requests to /api
app.post('/customers', (req, res) => {
    // Read the JSON array from data.json file
    fs.readFile('custData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        try {
            const jsonArray = JSON.parse(data);
            // Send the JSON array as the response
            res.json(jsonArray);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.post('/inventory', (req, res) => {
    // Read the JSON array from data.json file
    fs.readFile('inventoryData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        try {
            const jsonArray = JSON.parse(data);
            // Send the JSON array as the response
            res.json(jsonArray);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
