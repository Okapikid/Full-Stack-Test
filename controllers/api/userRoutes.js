const router = require("express").Router();
const { User } = require("../../models");

// Create new user with /api/user
// Signup
router.post("/", async (req, res) => {
  try {
    const dbUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    res.status(200).json(dbUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// this is for demonstration only (to see if data can be retrieved)
// api/user/userInfo:id
router.get("/userInfo/:id", async (req, res) => {
  try {
    const userInfo = await User.findByPk(req.params.id);

    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
