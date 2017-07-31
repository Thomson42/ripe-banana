const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviewer = require('./reviewer');
const Film = require('./film');

const reviewSchema = new Schema({
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    },
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'Reviewer',
        required: true
    },
    review: {
        type: String,
        maxlength: 140,
        required: true
    },
    film: {
        type: Schema.Types.ObjectId,
        ref: 'Film',
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);