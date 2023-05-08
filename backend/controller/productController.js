const Product = require("../Model/product");

exports.createProduct = async (req, res) => {
  const {
    ownerID,
    productName,
    images,
    price,
    size,
    color,
    type_of,
    ownerName,
  } = req.body;
  const { xxs, xs, s, m, l, xxl } = size;
  console.log(xxs);
  console.log(ownerID, productName, images, price);
  try {
    const newProduct = await Product.create({
      ownerID: ownerID,
      productName: productName,
      images: images,
      price: price,
      color: color,
      type_of: type_of,
      ownerName: ownerName,
      size: {
        xxs,
        xs,
        s,
        m,
        l,
        xxl,
      },
      details:
        "The Unisex Staple T-Shirt feels soft and light with just the right amount of stretch. It's comfortable and flattering for all. We can't compliment this shirt enough–it's one of our crowd favorites, and it's sure to be your next favorite too! Solid colors are 100% Airlume combed and ring-spun cotton Ash color is 99% combed and ring-spun cotton, 1% polyester",
      caretip:
        "Machine wash cold, inside-out, gentle cycle with mild detergent and similar colors. Use non-chlorine bleach, only when necessary. No fabric softeners.",
      warning:
        "Do not dry clean. Cool iron inside-out if necessary. Do not iron decoration.",
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
        message: `There is no product with the given ID(${id})`,
      });
    }

    for (let item in req.body) {
      product.size[item].count -= req.body[item].count;
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
exports.ChangeProductStatus = async (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.status;
  try {
    const updatedStatus = await Product.findByIdAndUpdate(id, {
      status: newStatus,
    });
    res.status(200).json(updatedStatus);
  } catch (error) {
    res.status(400).json({ message: "can't update" });
  }
};
