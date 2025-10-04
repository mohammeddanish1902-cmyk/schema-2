const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        purpose:"title of the book"
    },
    author:{
        type:String,
        reqiured:true,
        purpose:"name of the author"
    },
    category:{
        type:String,
        required:true,
        Enum: [fiction, non-fiction, comics, biography],
        purpose:"genre of the book"
    }
});

const memberSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        Unique: true,
        Purpose: "Email address of the member"

    }

});

const book = mongoose.model('book',bookSchema);
const Member = mongoose.model('member',memberSchema);