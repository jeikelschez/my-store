const express = require('express');
const ProductsService = require('./../services/products.service');
const router = express.Router();

const service = new ProductsService();

router.get("/filter", (req, res) => {
  res.send("Hola, soy un filter");
});

router.get("/", (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id);
  res.json(products);
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id
  });
});

module.exports = router;
