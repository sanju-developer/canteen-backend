const UserModel = require('../models/usermodel');

const addUser =  async(req,res) => {
    
    const UserData = {
        mobileno: req.body.mobileno,
        rollno:  req.body.rollno,
        name:  req.body.name,
        password:  req.body.password,
        wallet: req.body.wallet
    }

    const isUserExist = await UserModel.findOne({ rollno: req.body.rollno });

    if(isUserExist){
        res.status(422).json({
            msg: 'User Already Exist'
        });
    } else {
        const response = await UserModel.create(UserData);
        if(response) {
            res.status(200).json({
                msg:'User Registered Successfully',
                response: response
            });
        } else {
            res.status(500).json({
                msg:'Internal Server Error'
            });
        }
    }
}

const removeUser = async  (req, res) => {
    const UserId = await UserModel.findOne({ rollno: req.body.rollno });

    if(UserId){
        const response = await UserModel.remove({ rollno: req.body.rollno });
        if(response){
            res.status(200).json({
                msg: 'User Deleted Successfully',
                response: response
            });
        } else {
            res.status(500).json({
                msg:'Internal Server Error'
            });
        }
    } else {
        res.status(404).json({
            msg: 'User Does Not Exist'
        });
    }

}

const loginUser = async (req,res) => {
    const IsRollNoExist = await UserModel.findOne({ rollno: req.body.rollno })

    if(IsRollNoExist){
        if(req.body.password == IsRollNoExist.password){
            res.status(200).json([{
                msg: 'Logged In Successfully',
                response: IsRollNoExist
            }]);
        } else {
            res.status(401).json([{
                msg: 'Unauthorized User',
            }]);
        }
    } else {
        res.status(404).json([{
            msg: 'You Are Not Registerd Yet',
        }]);
    }
}

module.exports = { addUser, removeUser, loginUser }