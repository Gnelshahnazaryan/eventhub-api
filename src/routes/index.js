const router = require("express").Router();

const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes.js");
const eventRoutes = require("./event.routes.js");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/events", eventRoutes);

module.exports = router;
