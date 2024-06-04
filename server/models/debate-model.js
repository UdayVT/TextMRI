const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema(
    {
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('Debate', playlistSchema)
