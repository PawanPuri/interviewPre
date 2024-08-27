import mongoose from "mongoose"
const categorySchema = new mongoose.Schema({
    categories: {
        type: String,
        required: true,
        unique:true
    }
})

const categoryModel = mongoose.model('category' , categorySchema)

export default categoryModel