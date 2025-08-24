import Product from '../models/product.model.js'

// Get all products 
export const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products)
} 

// Get product by ID
export const getProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) return res.status(404).json({ message: 'Not found' })
    res.status(200).json(product)
    res.status(500).json({ message: e.message })
}

// Post or Create a product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch(e) {
    res.status(500).json({ message: e.message })
  }
}

// Put or Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body) 

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    const updatedProduct = await Product.findById(id)

    res.status(200).json(updatedProduct)
  } catch(e) {
    res.status(500).json({ message: e.message })
  }
}

// Delete one product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found to delete' })
    }

    res.status(200).json({deletedProduct: product})
  } catch(e) {
    res.status(500).json({ message: e.message })
  }
}