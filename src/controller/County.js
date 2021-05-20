const County = require("../models/County");

module.exports.create = (req, res) => {

  const { name, islandId } = req.body;

  console.log(islandId)
  County.create({
    name,
    islandId
  }).then(county => res.status(201).json({county}));

}

module.exports.getAll = (req, res) => {
  County.findAll().then(county => 
    res.status(200).json({county: county}))
}