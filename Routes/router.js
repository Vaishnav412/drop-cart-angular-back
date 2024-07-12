const express=require('express')


const productController=require('../controllers/productController')

const usercontroller=require('../controllers/userControllers')


const router=new express.Router()


router.get('/products/all',productController.getAllProductController)

router.get('/product/view/:id',productController.getAproduct)

router.post('/user/register',usercontroller.registerController)

router.post('/user/login',usercontroller.loginController)


module.exports=router