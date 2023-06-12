const router = require("express").Router();

const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
router.get("/set-token-cookie", async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: "Demo-lition",
        },
    });
    setTokenCookie(res, user);
    return res.json({ user });
});

// GET /api/restore-user
const { restoreUser } = require("../../utils/auth.js");
router.get("/restore-user", restoreUser, (req, res) => {
    return res.json(req.user);
});

// GET /api/require-auth
const { requireAuth } = require("../../utils/auth.js");
router.get("/require-auth", requireAuth, (req, res) => {
    return res.json(req.user);
});

router.post("/test", function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
