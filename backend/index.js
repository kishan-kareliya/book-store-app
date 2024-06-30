import express from 'express';
import { PORT, mongoDbUrl } from './config.js'
import cors from 'cors'
import mongoose from 'mongoose';
import bookRoute from './routes/booksRoute.js'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to book store app");
})

app.use('/books', bookRoute);

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log("App connect to the Database successfully");

        app.listen(PORT, () => {
            console.log("App listening to PORT:" + PORT);
        })
    })
    .catch((err) => {
        console.error(err);
    })