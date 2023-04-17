const Product = require("../Model/product");

exports.createProduct = async (req, res) => {
  const { ownerID, productName, images, price, count, size } = req.body;

  try {
    const newProduct = await Product.create({
      ownerID: ownerID,
      productName: productName,
      images: images,
      price: price,
      count: count,
      size: size,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const getAll = await Product.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
