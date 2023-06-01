import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is reqiured'],
        minlength: [3, 'The name must be longer than 3 characters'],
        maxlength: [40, 'The name must be less than 40 characters'],
        trim: true,
    },
    number: {
        type: String,
        required: [true, 'The number field is reqiured'],
        minlength: [5, 'The number must be longer than 5 characters'],
        maxlength: [20, 'The number must be less than 20 characters'],
        trim: true,
    },
    photo: {
        type: String,
    },
    description: {
        type: String,
        maxlength: [300, 'The name must be less than 300 characters'],
    },
},
{
    timestamps: true
})

const contactModel = mongoose.model('contacts', contactSchema);

export default contactModel;