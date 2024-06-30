import express from 'express';
import mongoose from 'mongoose';
import { bookModel } from '../models/BookModel.js';

const router = express.Router();

// route for add new book
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                msg: "send all required fields: title, author, publishYear"
            })
        }

        const { title, author, publishYear } = req.body;

        const newBook = await bookModel.create({
            title,
            author,
            publishYear
        })

        return res.status(201).send(newBook);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "Internal Server Error"
        })
    }
})

// route for get all the books
router.get('/', async (req, res) => {
    try {
        const books = await bookModel.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "Internal Server Error"
        })
    }
})

//route to fetch particular book by id
router.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({
            msg: "Invalid book Id format"
        })
    }

    try {
        const findBook = await bookModel.findById(bookId);
        if (findBook) {
            res.status(200).json(findBook);
        }
        else {
            res.status(404).json({
                msg: "Book not found"
            })
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        // Validate Book ID (using Mongoose's built-in validation)
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ msg: "Invalid book ID format" });
        }

        // Efficient Update with Mongoose Update Query Options
        const updateOptions = { new: true }; // Return the updated document
        const updatedBook = await bookModel.findByIdAndUpdate(bookId, req.body, updateOptions);

        if (!updatedBook) {
            return res.status(404).json({ msg: "Book not found" });
        }

        res.status(200).json(updatedBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

//route for delete book
router.delete('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        // Validate Book ID (using Mongoose's built-in validation)
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ msg: "Invalid book ID format" });
        }

        const result = await bookModel.findByIdAndDelete(bookId);

        if (!result) {
            return res.status(404).json({
                msg: "Book Can't Found!"
            })
        }

        res.status(200).json({
            msg: "Book Deleted Successfully!"

        })
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})

export default router;