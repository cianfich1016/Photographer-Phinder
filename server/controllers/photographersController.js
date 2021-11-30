// const db = require("../models");
const { Photographer } = require("../models");
const db = require("../config/connection");
const { signToken } = require("../utils/auth");
// Defining methods for the photographersController
module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await Photographer.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });
    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }
    res.json(foundUser);
  },
  // async login({ body }, res) {
  //   const user = await Photographer.findOne({ email: body.email });
  //   if (!user) {
  //     return res.status(400).json({ message: "Can't find this user" });
  //   }

  //   const correctPw = user.password === body.password;

  //   if (!correctPw) {
  //     return res.status(400).json({ message: "Wrong password!" });
  //   }
  //   const token = signToken(user);
  //   // res.json({ token, user });
  //   process.exit(0);
  // },

  async login({ body }, res) {
    // db.once("open", async () => {
    const user = await Photographer.findOne({ email: body.email });
    console.log({ user });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }
    const correctPw = user.password === body.password;
    if (!correctPw) {
      return res.status(404).json({ message: "Wrong password!" });
    } else {
      return res.status(200).json({ message: "Success!" });
    }
    process.exit(0);
    const token = signToken(user);
    console.log(token);
    // res.json({ token, user });

    // });
  },

  async createUser({ body }, res) {
    const user = await Photographer.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // log
  async findAll(req, res) {
    const profiles = await Photographer.find({});

    if (!profiles) {
      return res.status(400).json({ message: "No profiles found" });
    }

    res.json(profiles);
  },

  async findByState(req, res) {
    const profiles = await Photographer.find({ state: req.state });

    if (!profiles) {
      res.status(400).json({ message: "No photographers found in this state" });
    }

    res.json(profiles);
  },

  async findByCategory(req, res) {
    const profiles = await Photographer.find({ category: req.category });

    if (!profiles) {
      res
        .status(400)
        .json({ message: "No photographers available in this category" });
    }

    res.json(profiles);
  },

  async createProfile({ body }, res) {
    const newProfile = await Photographer.create(body);

    if (!newProfile) {
      return res
        .status(400)
        .json({ message: "Something went wrong, unable to create profile" });
    }

    const token = signToken(newProfile);
    res.json({ token, newProfile });
  },

  async updateProfile(req, res) {
    const profile = Photographer.findOneAndUpdate({ _id: req.id }, req.body, {
      new: true,
    }); //where id=, fields to update

    if (err) {
      res.status(500).json(err);
    }

    res.json(profile);
  },

  async deleteProfile(req, res) {
    const profile = await Photographer.findOne({ id: req.id });

    if (!profile) {
      res.status(400).json({ message: "No profile found with this id" });
    }

    res.json("Profile has been deleted");
  },
};
