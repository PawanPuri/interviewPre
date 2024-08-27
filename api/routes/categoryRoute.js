import express from 'express'
import categoryModel from '../models/CategoryModel.js'
const router=express.Router()

router.post('/create',async(req,res)=>{
    try{
        const newcategory=new categoryModel(req.body);
        await newcategory.save()
        res.send('category is saved successfully..')
    }
    catch{(error)
        return res.status(400).json(error)
    }
})


router.get('/getallcategory',async(req,res)=>{
   
    
   
    
    try {
      
           const posts = await categoryModel.find({});
            
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router