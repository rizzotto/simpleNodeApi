const mongoose = require('mongoose')

const Product = mongoose.model('Product')

const logger = require("../../Logger")


module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query

            const products = await Product.paginate({}, { page, limit: 10 })
            logger.log('info', "Product index")
            return res.json(products)
        } catch (err) {
            console.log(err)
        }
    },

    async status(req, res) {
        try {
            const products = await Product
            return res.send('OK')
        } catch (err) {
            return res.send('ERROR')
        }
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id)
        logger.log('info', `Product searched by id: ${req.params.id}`)
        return res.json(product)
    },

    async store(req, res) {
        const product = await Product.create(req.body)
        logger.log('info', `Product created`)
        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        logger.log('info', "Product updated")
        return res.json(product)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)
        logger.log('info', "Product deleted")
        return res.send()
    }
}