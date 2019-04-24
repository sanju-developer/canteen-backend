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
        res.status(200).json([{
            msg: 'Item already Exist'
        }]);
    } else {
        const response = await AddItemModel.create(addItemData);
        res.status(200).json([{
            msg: 'Item Added',
            response: response,
        }]);
    }
}

const deleteItem = async (req, res) => {

    const itemExist = await AddItemModel.findOne({ _id: req.body.uniqueid });

    if (itemExist) {
        const response = await AddItemModel.remove({ "_id": ObjectId(req.body.uniqueid) })
        if (response) {
            res.status(200).json([{
                msg: 'Item Deleted',
                response: response,
            }]);
        } else {
            res.status(500).json([{
                msg: 'Internal server error'
            }]);
        }
    } else {
        res.status(200).json([{
            msg: 'Item does not exist'
        }]);
    }
}

const updateItem = async (req, res) => {
    const overAllResponse = [];
    const itemPresent = await AddItemModel.findOne({ _id: req.body.uniqueid });

    if (itemPresent) {
        // const response = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { itemname: req.body.itemname } });
        if(req.body.itemname){
            let resp = await AddItemModel.findOne({ itemname: req.body.itemname });
            if (resp) {
                res.status(200).json([{
                    msg: "Can't Update Item already Exist."
                }]);
            } else {
                const response1 = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { itemname: req.body.itemname } });
                overAllResponse.push(response1);
            }
            
        }
        if(req.body.qty){
            const response2 = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { qty: req.body.qty } });
            overAllResponse.push(response2);
        }
        if(req.body.full){
            const response3 = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { full: req.body.full } });
            overAllResponse.push(response3);
        } 
        if(req.body.half){
            const response3 = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { half: req.body.half } });
            overAllResponse.push(response3);
        } 
        if(req.body.status){
            const response4 = await AddItemModel.updateOne({ _id: req.body.uniqueid }, { $set: { status: req.body.status } });
            overAllResponse.push(response4);
        }
        res.status(200).json([{
            msg: 'Updated Successfully',
            resp: overAllResponse
        }])
    } else {
        res.status(404).json([{
            msg: 'Item Not Found'
        }])
    }
}

const getAllItem = async (req,res) => {
    const allItem = await AddItemModel.find();

    if(allItem){
        res.status(200).json([{
            response: allItem
        }])
    } else {
        res.status(404).json([{
            msg: 'Item Not Found'
        }])
    }
}

module.exports = { AddItem, deleteItem, updateItem, getAllItem }