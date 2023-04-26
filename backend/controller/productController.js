const Product = require("../Model/product");

exports.createProduct = async (req, res) => {
  const { ownerID, productName, images, price, size, color } = req.body;
  const { xxs, xs, s, m, l, xxl } = size;

  console.log(ownerID, productName, images, price);
  try {
    const newProduct = await Product.create({
      ownerID: ownerID,
      productName: productName,
      images: images,
      price: price,
      color: color,
      size: {
        xxs: {
          count: 1,
        },
        xs: {
          count: 1,
        },
        s: {
          count: 1,
        },
        m: {
          count: 1,
        },
        l: {
          count: 1,
        },
        xxl: {
          count: 1,
        },
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
exports.DeleteProduct = async (req, res) => {
  const id = req.body.id;
  try {
    console.log(id);
    await Product.findByIdAndDelete(id);
    res.status(200).json({ deleteUser: "succesful" });
  } catch (error) {
    res.status(400).json({ message: "can't delete" });
  }
};
exports.DeleteAll = async (req, res) => {
  await Product.deleteMany();
  res.status(200).json({ success: true });
};
