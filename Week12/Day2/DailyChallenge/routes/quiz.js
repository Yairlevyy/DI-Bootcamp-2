const express = require('express')
const router = express.Router()
const {
    displayQuest,
    submitAnswer,
    getScore
} = require('../controllers/quiz.js')

router.get('/',displayQuest)
router.post('/',submitAnswer)
router.get('/score',getScore)

module.exports = router
