const mongoose = require("mongoose");

const articleSchma = mongoose.Schema ({

    ArticleName: { type: String, require},
    image: { type: String, require},
    undefined: { type: String, require},
}, {
    timestamps:true,
});

const articleModel = mongoose.model('articles', articleSchma);

module.exports = articleModel;