import contactModel from "../models/contactModal.js"

export const getContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find();

        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export const getContact = async (req, res) => {
    const id = req.params.id;

    try {
        const contact = await contactModel.findById(id).orFail();

        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({error: 'The contact does not exist'});
    }
}


export const createContact = async (req, res) => {
    const contactData = req.body;

    try {
        const contact = await contactModel.create(contactData);

        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateContact = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const contact = await contactModel.findByIdAndUpdate(id, body, {runValidators: true}).orFail();

        res.status(200).json(contact);
    } catch (error) {

        if(error.name == 'DocumentNotFoundError' || error.name == 'CastError') {
            res.status(404).json({error: 'The contact does not exist'});
        } else {
            res.status(400).json(error); 
        }
    }
}

export const deleteContact = async (req, res) => {
    const id = req.params.id;

    try {
        const contact = await contactModel.findByIdAndDelete(id).orFail();

        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({error: 'The contact does not exist'});
    }
}