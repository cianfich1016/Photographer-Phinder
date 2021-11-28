const router = require("express").Router();
const photographerRoutes = require("./photographers");

router.use("/photographers", photographerRoutes);

module.exports = router;
