const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/addItemcontroller');

router.post('/addItem', ItemController.AddItem);

router.post('/deleteItem',ItemController.deleteItem);

router.post('/updateItem',ItemController.updateItem);
router.get('/test', (req,res) => {
    res.send('holla ayush');
})

module.exports = router;
