const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message : 'Handling GET Request  to /products'
    });
});

router.post('/',(req,res,next) =>{
    res.status(201).json({
        message : 'Handling POST Request  to /products'
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message : 'You discovered the special ID',
            id : id
        });
    }else{
        res.status(200).json({
            message : 'You passesd an ID',
         });
    }
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message : 'Update Product'
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message : 'Delete Product'
    });
});


module.exports = router;