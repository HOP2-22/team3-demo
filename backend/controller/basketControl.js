const Basket = require("../Model/basket");
const Product = require("../Model/product");

exports.getAllBasket = async (req, res) => {
  try {
    const _id = req.params.id;
    const getAll = await Product.find(_id);

    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.DeleteBasket = async (req, res) => {
  const id = req.body.id;
  try {
    console.log(id);
    await Basket.findByIdAndDelete(id);
    res.status(200).json({ deleteUser: "succesful" });
  } catch (error) {
    res.status(400).json({ message: "can't delete" });
  }
};

exports.DeleteAll = async (req, res) => {
  await Basket.deleteMany();
  res.status(200).json({ success: true });
};
