const router = require("express").Router();
const { User } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const userInfo = await User.findByPk(req.params.id);
    // convert sequelize object into a usable object
    const serializedUserData = userInfo.get({ plain: true });
    res.render("home", serializedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
