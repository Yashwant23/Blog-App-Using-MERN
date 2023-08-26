const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 5,
    },
    photo: {
        type: String,
        default: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: [String],
        default: [],
    }
})

module.exports = mongoose.model("Blog", BlogSchema)
