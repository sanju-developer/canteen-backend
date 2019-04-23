const AddItemModel = require('../models/addItemmodel');
const ObjectId = require('mongodb').ObjectID;

const AddItem = async (req, res) => {

    const addItemData = {
        itemname: req.body.itemname,
        qty: req.body.qty,
        full: req.body.full,
        half: req.body.half,
        status: req.body.status,
    }

    let resp = await AddItemModel.findOne({ itemname: req.body.itemname });
    if (resp) {
        res.status(200).json({
            msg: 'Item already Exist'
        });
    } else {
        const response = await AddItemModel.create(addItemData);
        res.status(200).json({
            msg: 'Item Added',
            response: response,
        });
    }

}

const deleteItem = async (req, res) => {

    const itemExist = await AddItemModel.findOne({ _id: req.body.uniqueid });

    if (itemExist) {
        const response = await AddItemModel.remove({ "_id": ObjectId(req.body.uniqueid) })
        if (response) {
            res.status(200).json({
                msg: 'Item Deleted',
                response: response,
            });
        } else {
            res.status(500).json({
                msg: 'Internal server error'
            });
        }
    } else {
        res.status(200).json({
            msg: 'Item does not exist'
        });
    }
}

const updateItem = async (req, res) => {
    const itemPresent = await AddItemModel.findOne({ _id: req.body.uniqueid });

    if (itemPresent) {
        const response = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { itemname: req.body.itemname } });
        res.status(200).json({
            msg: 'Updated Successfully',
            resp: response
        })
    } else {
        res.status(404).json({
            msg: 'Item Not Found'
        })
    }
}

module.exports = { AddItem, deleteItem, updateItem }