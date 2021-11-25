const router = require("express").Router();
const photographerRoutes = require("./photographers");

router.use("/photographer", photographerRoutes);

module.exports = router;
