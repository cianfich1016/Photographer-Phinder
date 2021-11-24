const db = require('../config/connection');
const { Photographer } = require('../models');

const photographerData = require('./photographerData.json');

db.once('open', async () => {
  await Photographer.deleteMany({});

  const pData = await Tech.insertMany(photographerData);

  console.log('Photographers seeded!');
  process.exit(0);
});