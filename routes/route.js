const express = require('express');
const router = express.Router();
const AddItemController = require('../controllers/addItemcontroller');
const OrderItemController = require('../controllers/orderItemcontroller');
const UserController = require('../controllers/usercontroller');

router.post('/addItem', AddItemController.AddItem);

router.post('/deleteItem', AddItemController.deleteItem);

router.post('/updateItem', AddItemController.updateItem);

router.get('/getAllItem', AddItemController.getAllItem);

router.post('/orderItem', OrderItemController.orderItem);

router.post('/cancelOrderItem', OrderItemController.cancelOrderItem);

router.post('/addUser',UserController.addUser);

router.post('/removeUser', UserController.removeUser);

router.post('/loginUser', UserController.loginUser);

module.exports = router;
