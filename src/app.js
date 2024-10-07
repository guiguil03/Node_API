import express from 'express';
const app = express();
const port = 3000;
import pkg from 'mongoose';
const { connect } = pkg;

// Utilisez la variable d'environnement MONGO_URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/Projet';

connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connexion à la base de données réussie"))
.catch((err) => console.error("Échec de connexion à la base de données", err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
