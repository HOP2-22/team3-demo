const Product = require("../Model/product");

exports.createProduct = async (req, res) => {
  const { ownerID, productName, images, price, productDetails } = req.body;
  const { count, size, color } = productDetails;
  console.log(ownerID, productName, images, price, productDetails);
  try {
    const newProduct = await Product.create({
      ownerID: ownerID,
      productName: productName,
      images: images,
      price: price,
      productDetails: {
        size: size,
        count: count,
        color: color,
      },
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

exports.PatchProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "There is no product" + id + " like that",
      });
    }

    for (let item in req.body) {
      product[item] = req.body[item];
    }

    await product.save();

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
