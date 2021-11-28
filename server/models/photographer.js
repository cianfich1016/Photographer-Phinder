const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const photographerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    companyName:{
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photoType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    reservationCost: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
});

// hash user password
photographerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
photographerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Photographer = model('Photographer', photographerSchema);

module.exports = Photographer;