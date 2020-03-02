const express = require("express");
const cartItemRoutes = express.Router();

const cartItem = [
  {
    id: 0,
    product: "milk",
    price: "2.69",
    quantity: "1"
  },
  {
    id: 1,
    product: "eggs",
    price: "1.70",
    quantity: "2"
  },
  {
    id: 2,
    product: "bread",
    price: "1.39",
    quantity: "3"
  },
  {
    id: 3,
    product: "tekton socket wrench set",
    price: "35.99",
    quantity: "1"
  }
];

module.exports = cartItem;
