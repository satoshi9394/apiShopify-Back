const mongoose = require('mongoose')
const Store = mongoose.model('Stores')

exports.read_a_store = (req, res) => {

/*
  Task.find({}, (err, task)=>{

    if(err) return res.send(err);
    res.json(task)

  })*/

  Store
    .findOne({ shopify_shop_id: req.params.id }, )
    .exec((err, record) => {
      if(err) return res.status(400).send(err)
      if(record === null) return res.status(400).json({msg: 'Tienda no encontrada'})
      res.json(record)
    })
}
