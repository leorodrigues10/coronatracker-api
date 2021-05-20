const County = require("../models/County");
const Islands = require("../models/Islands")


module.exports.create = (req, res) => {

  const { name } = req.body;

  Islands.create({
    name
  }).then(islands => res.status(201).json({islands}));

}

module.exports.getAll = (req, res) => {
  Islands.findAll({include: County}).then(islands => 
    res.status(200).json({islands: islands}))
}