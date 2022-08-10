const express = require('express');
const uuid = require('uuid');
const router = express.Router();
let users = require('../../03_user');
//get all data
router.get('/',(req,res)=>{
    res.json(users);
})
//get user by id
router.get('/:id',(req,res)=>{
    const found = users.some(user=> user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else{
        res.sendStatus(404);
    }
})

// creating new user
router.post('/',(req,res)=>{
    const newUser ={
        id:uuid.v4(),   
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    }
    if(!newUser.name || !newUser.email || !newUser.phone ){
        return res.sendStatus(400)
    }
    users.push(newUser);
    res.json(users);
})

// update a user
router.put('/:id',(req,res)=>{
    const found = users.some(user=> user.id === parseInt(req.params.id));
    if(found){
        const updateUser = req.body;
        users.forEach(user=>{
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name? updateUser.name : user.name;
                user.email = updateUser.email? updateUser.email : user.email;
                user.phone = updateUser.phone? updateUser.phone : user.phone;
                res.json({
                    msg:"user updated",
                    user
                })
            }
        })
    }
})

// delete a user

router.delete('/:id',(req,res)=>{
    const found = users.some(user=> user.id === parseInt(req.params.id));
    if(found){
        users = users.filter((user)=>user.id !== parseInt(req.params.id));
        res.json({
            msg: 'user deleted',
            users,
        });
    }else{
        res.statusCode(400);
    }
})
module.exports = router;
// module can't be used without export