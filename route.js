const router = require('express').Router();

router.get('/hulk', (req, res, next) => {
    console.log('call user ')
    res.header('Cache-Control', 'private')
    res.send({name: 'Hulk', age: 45})
})

module.exports = router;
