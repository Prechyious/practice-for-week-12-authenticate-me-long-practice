const express = require("express");
const router = express.Router();

router.get("api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF_TOKEN", csrfToken);
    res.status(200).json({
        XSRD_Token: csrfToken,
    });
});

module.exports = router;
