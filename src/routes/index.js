const router = require("express").Router();

const authRoutes = require("../routes/auth.routes.js");

router.use("/auth", authRoutes);

module.exports = router;
