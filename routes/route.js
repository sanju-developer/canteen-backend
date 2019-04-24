const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/addItemcontroller');

router.post('/addItem', ItemController.AddItem);

router.post('/deleteItem',ItemController.deleteItem);

router.post('/updateItem',ItemController.updateItem);

router.get('/getAllItem',ItemController.getAllItem);

module.exports = router;
