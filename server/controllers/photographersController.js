const db = require("../models");

// Defining methods for the photographersController
module.exports = {

  async findAll (req,res) {
    const profiles = await db.find({})
    
    if(!profiles) {
      return res.status(400).json({ message: 'No profiles found'});
    }

    res.json(profiles);
  },

  async findByState (req,res) {
    const profiles = await db.find({ state: req.state});

    if(!profiles) {
      res.status(400).json({ message: 'No photographers found in this state'});
    }

    res.json(profiles);
  },

  async findByCategory (req,res) {
    const profiles = await db.find({ category: req.category });

    if(!profiles) {
      res.status(400).json({ message: 'No photographers available in this category'});
    }

    res.json(profiles);
  },

  async createProfile ({ body },res) {
    const newProfile = await db.create(body);

    if(!newProfile) {
      return res.status(400).json( {message: 'Something went wrong, unable to create profile'});
    }

    res.json(newProfile);
  },

  async updateProfile (req,res) {
    const profile = db.findOneAndUpdate({ _id = req.id }, req.body, { new: true}); //where id=, fields to update

    if(err) {
      res.status(500).json(err);
    }

    res.json(profile);
  },

  async deleteProfile (req,res) {
    const profile = await db.findOne({ id: req.id});

    if(!profile) {
      res.status(400).json({ message: 'No profile found with this id'});
    }

    res.json('Profile has been deleted');
  }

};
