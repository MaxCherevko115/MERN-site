import express from "express";
import * as contactsController from "../controllers/contactsController.js";

const router = express.Router();

router.get('/contacts', contactsController.getContacts);
router.post('/contact/create', contactsController.createContact);
router.get('/contact/:id', contactsController.getContact);
router.patch('/contact/update/:id', contactsController.updateContact)
router.delete('/contact/delete/:id', contactsController.deleteContact)

export default router;