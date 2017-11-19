"use strict";

module.exports = function(sequelize, DataTypes) {
  var Producto = sequelize.define("Producto", {
    nombre: DataTypes.STRING,
    ean: DataTypes.STRING,
    talla: DataTypes.STRING
  });

  return Producto;
};