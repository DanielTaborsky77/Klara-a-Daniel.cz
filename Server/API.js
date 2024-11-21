const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Funkce pro přidání záznamu do CSV souboru
const updateTotalDeclinedCount = (fileName, count) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        let totalCount = 0;

        if (!err && data.trim()) {
            totalCount = parseInt(data, 10) || 0;
        }

        totalCount += parseInt(count, 10);

        fs.writeFile(fileName, totalCount.toString(), 'utf8', (err) => {
            if (err) {
                console.error(`Chyba při zapisování do ${fileName}:`, err);
            }
        });
    });
};
const updateTotalCount = (fileName, count) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        let totalCount = 0;
        
        if (!err && data) {
            totalCount = parseInt(data, 10) || 0;
        }
        totalCount += parseInt(count, 10);
        
        fs.writeFile(fileName, totalCount.toString(), (err) => {
            if (err) {
                console.error(`Chyba při zapisování do ${fileName}:`, err);
            }
        });
    });
};

const appendToCSV = (fileName, data) => {
    const row = `${data.type};${data.name};${data.count}\n`;
    fs.appendFile(fileName, row, (err) => {
        if (err) {
            console.error(`Chyba při zapisování do ${fileName}:`, err);
        }
    });
};

// Koncový bod pro potvrzení účasti
app.post('/participation', (req, res) => {
    const { type, name, count, decision } = req.body;

    if (!type || !name || !count || !decision) {
        return res.status(400).json({ error: 'Vyplňte všechny požadované údaje.' });
    }

    const data = { type, name, count };
    if (decision === 'Zúčastní se') {
        appendToCSV('Accepted.csv', data);
        updateTotalCount('total_count.txt', count); // Aktualizace celkového počtu
    } else if (decision === 'Nezúčastní se') {
        appendToCSV('Declined.csv', data);
        updateTotalDeclinedCount('total_declined_count.txt', count); // Aktualizace celkového počtu "Nezúčastní se"
    } else {
        return res.status(400).json({ error: 'Nesprávná hodnota pro rozhodnutí účasti.' });
    }

    res.json({ message: 'Údaje byly úspěšně uloženy.' });
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});