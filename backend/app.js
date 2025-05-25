const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/metrics', (req, res) => {
    res.json([
        { grade: '6th', attendance: 92, counseling_sessions: 15 },
        { grade: '7th', attendance: 88, counseling_sessions: 22 },
        { grade: '8th', attendance: 95, counseling_sessions: 10 }
    ]);
});

app.listen(PORT, () => {
    console.log(`School Dashboard API listening on port ${PORT}`);
});
