
// 1) import express

const express = require('express')

// import controller

const productController  = require('../Controller/productController')
const userController  = require('../Controller/userController')

// 2) create an object for the class

const router = new express.Router()

// 3) Path for resloving a request

//get all products

router.get('/allproducts',productController.getAllProductController)

//register post

router.post('/register',userController.registerController)
router.post('/login',userController.loginController)


// 4) export router

module.exports = router