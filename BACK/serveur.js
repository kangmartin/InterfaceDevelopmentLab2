const express = require('express');  //npm install express
const path = require('path');
const cors = require('cors');        //npm install cors

const app = express();
const port = 3000;

// Pour faire autoriser le "Cross-Origin Resource Sharing (CORS)" d'un client spécifique
app.use(cors({
  origin: 'http://localhost:8080'
}));

// Chemin vers le fichier JSON de apple
const apple = path.join(__dirname, './Data/AAPL-rates-5y.json');

// Route pour servir le fichier json de Apple
app.get('/AAPL-rates-5y.json', (req, res) => {
  console.log("Fichier AAPL envoyé !")
  res.sendFile(apple);
});

// Chemin vers le fichier JSON de facebook
const facebook = path.join(__dirname, './Data/FB-rates-5y.json');

// Route pour servir le fichier json de Facebook
app.get('/FB-rates-5y.json', (req, res) => {
  console.log("Fichier FB envoyé !")
  res.sendFile(facebook);
});

// Chemin vers le fichier JSON de google
const google = path.join(__dirname, './Data/GOOG-rates-5y.json');

// Route pour servir le fichier json de Google
app.get('/GOOG-rates-5y.json', (req, res) => {
  console.log("Fichier GOOG envoyé !")
  res.sendFile(google);
});
// Chemin vers le fichier JSON de microsoft
const microsoft = path.join(__dirname, './Data/MSFT-rates-5y.json');

// Route pour servir le fichier json de Microsoft
app.get('/MSFT-rates-5y.json', (req, res) => {
  console.log("Fichier AAPL envoyé !")
  res.sendFile(microsoft);
});


// Démarrage du serveur !!
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

