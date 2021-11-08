import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
const { Router, request, response } = require("express");
const user = require("../models/user");
const router = Router();
const usercopy = require("../models/user");

router.post("/signup", (request, response) => {
  const user = new usercopy({
    username: request.body.username,
    email: request.body.email,
    mobile: request.body.mobile,
    address: request.body.address,
    password: request.body.password,
  });
  user
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;

router.post('/login', async (req, res) =>{

  const loginUser = await user.findOne({
    email: req.body.email,
  });
  if (loginUser){
    if(bcrypt.compareSync(req.body.password, user.password)){
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user),
      })
    }
  }  
  else {
    res.status(401).send({msg:'Invalid E-mail or Password.'})
  }
});