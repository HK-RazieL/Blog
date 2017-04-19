const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    date: {type: Date, default: Date.now()},
    imagePath: {type: String}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;