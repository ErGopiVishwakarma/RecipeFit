const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    image: {
        type: String
    },
    heading: {
        type: String
    },
    subheading: {
        type: String
    },
    desc: {
        type: String
    },
    subimage: {
        type: [String]
    },
    sideimage: {
        type: [{
            image: {
                type: String
            },
            heading: {
                type: String
            },
            text: {
                type: String
            }
        }]
    },
    summary: {
        type: String
    },
    comments: {
        type: [{
            name: {
                type: String
            },
            email: {
                type: String
            },
            text: {
                type: String
            }
        }]
    }
}, {
    versionKey: false
})

const Article = mongoose.Model('Article', articleSchema);
module.exports = Article