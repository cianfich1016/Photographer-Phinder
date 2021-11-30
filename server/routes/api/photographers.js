const router = require("express").Router();
const {
  findAll,
  findByCategory,
  findByState,
  createProfile,
  updateProfile,
  deleteProfile,
  login,
} = require("../../controllers/photographersController");

// router.route("/test").post(console.log("test"));

router.route("/login").post(login);

// api/photographer
router.route("/").get(findAll);

// api/photographer/state
router.route("/state").get(findByState);

// api/photographer/category
router.route("/category").get(findByCategory);

// api/photographer/update
router.route("/update").put(updateProfile);

// api/photographer/
router.route("/create").post(createProfile);

// api/photographer/delete
router.route("/delete").delete(deleteProfile);

module.exports = router;
