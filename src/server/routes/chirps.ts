import { Router } from 'express';
import Chirp from '../db/models/Chirps';

const router = Router();

// mongoose and mongo sandbox routes
router.get('/add-chirp', (req, res) => {
    const chirp = new Chirp({
        content: 'new chirp 2',
        location: 'Birmingham'
    });

    chirp.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/all-chirps', (req, res) => {
    Chirp.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/single-chirp', (req, res) => {
    Chirp.findById('605cc3c4ff60c23630d86109')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

export default router;
