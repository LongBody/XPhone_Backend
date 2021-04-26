const express = require('express')
const productsRouter = require('./product')


const router = new express.Router()

router.use('/api/product', productsRouter)




module.exports = router