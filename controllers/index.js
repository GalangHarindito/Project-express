const user = require("../models/user")

module.exports = {
    getAll:(req, res) => {
        res.send(user)
    },
    getById:(req, res) => {
        try{
            const filteredUser = user.find(element => element.Id === Number(req.params.id))
            res.send({
                massage:"ID Found!",
                filteredUser
            })
        }
        catch(error){
            res.send({
                massage:"Error get id",
                error
            })
            console.log(error)
        }
    },
    addNewUser:(req, res) => {
        try{
            let newId = user.length + 1
            let newUser = {
                Id:newId,
                firstName:req.body.firstName,
                lastName:req.body.lastName
            }
            user.push(newUser)

            res.status(200).send({
                massage:"New user successfully added",
                user
            })
        }
        catch(error){
            res.send({
                massage:"Error add new user",
                error
            })
        }
    },
    deleteUser:(req, res) => {
        try{
            const useDel = req.params.id
            const userDelete = user.findIndex(element => element.Id === Number(useDel))
            user.splice(userDelete,1)
            res.status(200).send({
                message : "User has been deleted",
                user
                })
        }
        catch(error){
            res.send({
                massage:"Error delete user",
                error
            })
        }
    },
    updateUser:(req, res) => {
        try{
            const userUpdate = user.findIndex(element => element.Id === Number(req.params.id))
            user.map(element => {
                if (element.Id === Number(req.params.id)) {
                  user[userUpdate].firstName = req.body.firstName,
                  user[userUpdate].lastName = req.body.lastName
                }
              });
              res.send({
                message: "data successfully updated",
                user
              });
        }
        catch(error){
            res.send({
                massage:"Error update user",
                error
            })
            console.log(error)
        }
    }
}


