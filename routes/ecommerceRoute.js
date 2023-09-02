const express = require("express");

const { Users } = require('../model/user');
const { Orders } = require('../model/order');
const { Tokens } = require('../model/token');
const { Products } = require('../model/product');
const { Slides } = require('../model/slide');
const { Categories } = require('../model/categorie');
const Joi = require("joi");
const bodyParse = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/authMiddleware");



const createToken = (id) => {
    let signature = "SoftamosChallenge_gadjjajcabdhcjadbajkvhcanhjc";
    const expDate = 3 * 24 * 60 * 60;
    return token = jwt.sign({ id }, signature, { expiresIn: expDate });


}
//function that adds token todb
const addToken = async (token, userData) => {
    const user_id = userData._id;
    try {
        const result = await Tokens.deleteOne({ user_id });

        const newToken = new Tokens({
            user_id: userData._id,
            token: token,
        });

        // Save token to the database
        const savedToken = await newToken.save();

        return true; // Indicate success
    } catch (error) {
        throw error; // Propagate the error back to the caller
    }
};

//default Get
router.get("/", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Ecommerce app api",
        data: "no data Sent"
    });
})
 
//default Get
router.get('/logout', bodyParse.json(), async (req, res) => {
    //check error and return error
    try {
        //delete Token
        res.cookie('token', 'Bye', { httpOnly: true, maxAge: 1 });
        return res.status(200).send({
            responseCode: "00",
            responseMessage: " Logged out successfully",
            data: null
        });

    } catch (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: "Failed to logout",
            data: null

        });
    }
})


//Get Order by id 
router.get('/getOrderById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;

        try {
            const items = await Orders.find({ _id });

            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Order Retrieved successfully",
                data: items
            });

        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve " + _id,
                data: null

            });
        }

    }

})

//Get Category 
router.get('/getAllCategory',  bodyParse.json(), async (req, res) => {
        try {
            const items = await Categories.find({ });

            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Categories Retrieved successfully",
                data: items
            });

        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve Categories",
                data: null

            });
        }

})


//Get slide 
router.get('/getAllSlide', bodyParse.json(), async (req, res) => {
    try {
        const items = await Slides.find({ slideStatus: "show"});
 
        return res.status(200).send({
            responseCode: "00",
            responseMessage: "Slides Retrieved successfully",
            data: items
        });

    } catch (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: "Failed to retrieve Categories",
            data: null

        });
    }

})


// getAllUserOrder
router.get('/getAllUserOrder', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        userId: Joi.string().required().min(3),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { userId } = req.body;
        const param = {
            userId: userId,
        }

        try {
            const items = await Orders.find(param);

            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Order Retrieved successfully",
                data: items
            });

        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve Orders",
                data: null

            });
        }

    }
})

// Filter User Order
router.get('/FilterUserOrderByPrice', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        userId: Joi.string().required().min(3),
        priceRange: Joi.string(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        let { userId, priceRange } = req.body;
        const param = {
            userId: userId,
        }
        try {
            const items = await Orders.find(param);
            //return all if no price range is set
            if (!priceRange){
                return res.status(200).send({
                    responseCode: "00",
                    responseMessage: "Order Retrieved successfully",
                    data: items
                });
            }
            else{
            
            //filter order by priceRange
                const filteredOrders = items.filter(order => parseInt(order.price) <= priceRange);
                return res.status(200).send({
                    responseCode: "00",
                    responseMessage: "Order Retrieved successfully",
                    data: filteredOrders
                });
            }

        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to retrieve Orders "+error,
                data: null

            });
        }

    }
})


//createOrders Stack Api
router.put('/createOrders', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        productId: Joi.string().min(3).max(20).required(),
        quantity: Joi.string().max(20).required(),
        paymentType: Joi.string().min(3).max(20).required(),
        userId: Joi.string().min(3).required(),
        price: Joi.string().min(3).max(20).required(), 
        paymentRef: Joi.string().min(3).max(20).required(),
        delieveryAddress: Joi.string().min(3).max(20).required(),
        orderId: Joi.string().min(3).max(20).required(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { productId, quantity, paymentType, userId, price, delieveryAddress, orderId, paymentRef } = req.body;

    try {
            //save in database

            const newOrder = new Orders({
                productId, quantity, paymentType, userId, price, delieveryAddress, orderId, paymentRef, orderSatus:"Ready for process",
                dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
            });

            await newOrder.save()
            res.status(200).send({
                responseCode: "00",
                responseMessage: "User Order created successfully",
                data: newOrder
            })


    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error here" + error,
            data: 'null' + error
        })

    }
})


//delete Post 
router.delete('/deleteOrder', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        _id: Joi.string()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    else {
        //check if id exists
        const { _id } = req.body;
        //Delete
        try {
            const result = await Orders.deleteOne({ _id });
            return res.status(200).send({
                responseCode: "00",
                responseMessage: "Order " + _id + " deleted successfully",
                data: []
            });
        } catch (error) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "Failed to Delete " + _id,
                data: null
            });
        }


    }

})




//Update by Id
router.put('/updateOrderById', requireAuth, bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        productId: Joi.string().min(3).max(20).required(),
        quantity: Joi.string().max(20).required(),
        paymentType: Joi.string().min(3).max(20).required(),
        userId: Joi.string().min(3).required(),
        price: Joi.string().min(3).max(20).required(),
        paymentRef: Joi.string().min(3).max(20).required(),
        delieveryAddress: Joi.string().min(3).max(20).required(),
        orderId: Joi.string().min(3).max(20).required(),
        orderStatus: Joi.string().min(3).max(20).required(),
        _id:Joi.string().required()
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { productId, quantity, paymentType, userId, price, delieveryAddress, orderId, paymentRef, orderStatus, _id } = req.body;

    try {
        const result = await Orders.updateOne(
            { _id },
            {
                $set:
                //save in database
                {
                    productId, quantity, paymentType, userId, price, delieveryAddress, orderId, paymentRef, orderStatus,
                    dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            }
        );
        if (result.modifiedCount > 0) {
            //successful
            return res.status(200).send({
                responseCode: "00",
                responseMessage: _id + ' updated successfully',
                data: {
                    productId, quantity, paymentType, userId, price, delieveryAddress, orderId, paymentRef, orderStatus,
                   dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
                }
            });
        }
        else {
            //not successful
            return res.status(400).send({
                responseCode: "96",
                responseMessage: 'cannot update' + _id,
                data: null
            });
        }
    } catch (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: 'cannot update '+error,
            data: null
        });
    }
})

//user registration
router.put('/registeration', bodyParse.json(), async (req, res) => {
    const strongPasswordRegex = /(?=.*[A-Z])^(?=.*[a-z])^(?=.*[0-9])/;
    const Schema = Joi.object({
        
        address: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(2).max(20).required(),
        fullname: Joi.string().min(2).required(),
        password: Joi.string().min(8).required().regex(strongPasswordRegex).messages({
            'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, and one digit',
        }),
        phone: Joi.string().required().min(3).max(15),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { address, fullname, email, password, phone} = req.body;

    //hashe user password before sending to db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        //check if data exist
        const existUser = await Users.findOne({ email });
        if (existUser === null) {
            //save in database
            const newUser = new Users({
                address, fullname, email
                , hashedPassword, phone,
                dateCreated: new Date().toJSON(), dateUpdated: new Date().toJSON()
            });

            //save user to db
            const createUser = await newUser.save()
            //create Token for user
            const token = createToken(newUser._id)
            const addTokenDB = await addToken(token, newUser)
            //send info to user
            if (addTokenDB === true) {
                return res.status(200).send({
                    responseCode: "00",
                    responseMessage: "User Registered successfully",
                    data: createUser,
                    token
                })
            }
            else {
                return res.status(400).send({
                    responseCode: "96",
                    responseMessage: "Not able to create table to DB for user",
                    data: null,
                    token
                })
            }
        }
        else {
            res.status(400).send({
                responseCode: "96",
                responseMessage: "User already registered",
                data: null
            })

        }

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})


//Login userLogin
router.post('/login', bodyParse.json(), async (req, res) => {
    const Schema = Joi.object({
        email: Joi.string().required().email().max(50),
        password: Joi.string().required(),
    });
    //check error and return error
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).send({
            responseCode: "96",
            responseMessage: error.details[0].message,
            data: null
        });

    }
    const { email, password } = req.body;
    try {
        //check if data exist
        const existUser = await Users.findOne({ email });
        if (existUser === null) {
            //return error user doesnt exist
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "User does not exist Please register",
                data: null
            })
        }
        else {

            //check if password equals
            const Auth = await bcrypt.compare(password, existUser.hashedPassword)
            if (Auth === true) {
                    //create Token for user
                    const token = createToken(existUser._id)
                    const addTokenDB = await addToken(token, existUser)
                    //send info to user
                    if (addTokenDB === true) {
                        return res.status(200).send({
                            responseCode: "00",
                            responseMessage: "User Signed in successfully",
                            data: existUser,
                            token
                        })
                    }
                    else {
                        return res.status(400).send({
                            responseCode: "96",
                            responseMessage: "Not able to add user token to DB",
                            data: null,
                            token
                        })
                    }

            }
            else {
                res.status(400).send({
                    responseCode: "96",
                    responseMessage: "Wrong Password",
                    data: null
                })


            }

        }

    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "Internal server error",
            data: 'null' + error
        })

    }
})


module.exports.ecommerceRoute = router;