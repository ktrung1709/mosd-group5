const userInfoService = require("../services/userInfo.service");

exports.getInfo = async (req, res) => {
    let userId = req.user._id;
    await userInfoService.getInfo(userId).then(user => {
        if(!user){
            return res.json({
                message: "Not found user",
            })
        }else{
            return res.status(200).json( user );
        }
    })
}

exports.getMovies = async (req, res) => {
    let userId = req.user._id;
    await userInfoService.getMovies(userId).then(user => {
        console.log(user);
        if(!user){
            return res.json({
                message: "Not found user",
            })
        }else{
            return res.status(200).json( user );
        }
    })
}