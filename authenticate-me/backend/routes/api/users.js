const router = require("express").Router();
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

// Sign up
router.post("/", async (req, res, next) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({ user });
});

module.exports = router;
