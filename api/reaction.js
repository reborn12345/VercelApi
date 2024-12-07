const express = require('express');
const app = express();

// Middleware pour lire le JSON
app.use(express.json());

// Route pour récupérer les réactions
app.get('/api/reactions', (req, res) => {
    res.json({ message: "Liste des réactions à venir !" });
});

// Route pour ajouter une réaction
app.post('/api/reactions', (req, res) => {
    const { messageId, reaction } = req.body;
    // Simulez l'ajout de la réaction
    res.json({ message: `Réaction ajoutée au message ${messageId}`, reaction });
});

// Exporter l'API
module.exports = app;
