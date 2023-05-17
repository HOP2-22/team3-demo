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
    details,
    caretip,
    warning,
  } = req.body;
  const { xxs, xs, s, m, l, xxl } = size;
  try {
    const newProduct = await Product.create({
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
      details: details,
      caretip: caretip,
      warning: warning,
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const getAll = await Product.find().populate("owner");

    console.log(getAll);

    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.PatchProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const item = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `There is no product with the given ID(${id})`,
      });
    } else if (product.size[item].count <= 0) {
      return res.status(404).json({
        success: false,
        message: `Our product with that size is out of stock!`,
      });
    } else if (req.body[item].count > product.size[item].count) {
      return res.status(404).json({
        success: false,
        message: `We don't have enough product!`,
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

// get products by status
exports.getProductByStatus = async (req, res) => {
  const { status, limit = 100, page = 1 } = req.query;
  console.log(
    status,
    limit,
    page,
    "================================================"
  );
  try {
    const products = await Product.find({
      status,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: "something wrong" });
  }
};

exports.onlyApproved = async (req, res) => {
  try {
    const { query } = req;

    console.log(query);

    const responsive = await Product.find({ status: "approved", ...query });

    console.log(responsive);

    res.status(200).json({ success: true, json: responsive });
  } catch (error) {
    console.log(error);
  }
};
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Product.findById(id);
    res.send({ data: user });
  } catch (error) {
    res.send({ error: error });
  }
};

exports.getProductByOwner = async (req, res) => {
  try {
    const user = await Product.find({
      owner: req.params.id,
      status: " approved",
    }).populate("owner");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
};
