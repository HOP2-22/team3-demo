const Cart = require("../Model/cart");
const User = require("../Model/users");

exports.addProductIntoCart = async (req, res) => {
  try {
    const cardOwner = await User.findById(req.body.cardUser);
    if (cardOwner) {
      const newCard = await Cart.create({
        cardUser: cardOwner,
        productId: req.body.productId,
        color: req.body.color,
        size: req.body.size,
        count: req.body.count,
      });
      newCard.save();

      res.status(200).json(newCard);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.deleteProductFromCart = async (req, res) => {
  const id = req.body._id;

  try {
    await Cart.findByIdAndDelete(id);

    res.status(200).json({ message: "Succesfull!" });
  } catch (error) {
    res.status(400).json({ message: "Couldn't delete!" });
  }
};

exports.getUserCarts = async (req, res) => {
  try {
    const _id = req.params.id;

    const userCards = await Cart.find({ cardUser: _id });

    res.status(200).json(userCards);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
