var models = require('../models')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Producto.findAll()
    .then(function(productos) {
      res.send(productos);
  });
});
router.get('/:id', function(req, res, next) {
  models.Producto.findById(req.params.id)
    .then(function(productos) {
      res.send(productos);
  });
});
router.post('/',function(req,res,next){
  models.Producto.create({
    nombre:req.body.nombre,
    ean: req.body.ean
  }).then(function(producto){
    res.send(producto);
  }).catch(function(err){
    res.err(err.message);
})
});
router.delete('/:id',function(req,res,next){
  const producto = models.Producto.build({id:req.params.id});
  producto.destroy();
  models.Producto.findAll().then(function(productos) {
    res.send(productos);
  });
});
router.put('/actualiza/:id',(req,res,next) => {
  models.Producto.update({
      nombre: req.body.nombre,
      ean: req.body.ean
    },{where:{id:req.params.id}})
    .then((productos) =>{
      console.log('Productos: '+productos);
      if(productos ==1){
        res.send({respuesta:'Actualizado OK'});
      }else{
        res.send({respuesta: 'No se encontró el registro'});
      }
    })
  });
module.exports = router;
