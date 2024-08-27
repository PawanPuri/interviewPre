import express from 'express'
import comment from '../models/CommentModel.js';
const router=express.Router()



router.post('/new' ,async(request, response) => {
    try {
        const comment = await new comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})


router.get('/getcomments/:id', async (request, response) => {
    try {
        const comments = await comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
})

router.delete('/delete/:id',async (request, response) => {
    try {
        
        const comment = await comment.findById(request.params.id);
        
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
})

export default router