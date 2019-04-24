const OrderItemModel = require('../models/orderItemmodel');
const ObjectId = require('mongodb').ObjectID;


const orderItem = async (req,res) => {
    const orderItemData = {
        itemname: req.body.itemname,
        qty: req.body.qty,
        full: req.body.full,
        half: req.body.half,
    }
    // Add Order
    let response = await OrderItemModel.create(orderItemData);
    if(response) {
        res.status(200).json({
            msg: 'Order Added Successfully',
            response: response,
        });
    } else {
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

const cancelOrderItem = async (req,res) => {

    const orderId = await OrderItemModel.findOne({ _id: req.body.orderId });

    if(orderId){
        // delete order
        const response = await OrderItemModel.deleteOne({ "_id": ObjectId(req.body.orderId) });
        if(response){
            res.status(200).json({
                msg: 'Order Cancel Successfully',
                response: response,
            });
        } else {
            res.status(500).json({
                msg: 'Internal server error'
            });
        }
    } else {
        res.status(404).json({
            msg:'Order does not exist'
        })
    }
}

const updateOrderStatus = async (req,res) => {

}

module.exports = { orderItem, cancelOrderItem, updateOrderStatus } ;