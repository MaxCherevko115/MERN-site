import React, { useEffect, useState } from "react";

import { getContacts, createContact } from "../api/index.js";

import ContactItem from "../components/Main/ContactItem.jsx";
import Modal from "../components/Modal.jsx"
import { DefaultInput, DefaultTextarea, DefaultButton } from "../components/DefaultElements.jsx";

import "./ContactsPage.css";


const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactData, setContactData] = useState({});

  useEffect(() =>  {
    getContacts(setContacts);
  }, []);
  
  const handleInput = (e) => {
    setContactData({...contactData, [e.target.name]: e.target.value});
  }

  const handleInputPhoto = (e) => {
    const file = e.target.files[0];

    if(file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setContactData({...contactData, [e.target.name]: base64Image});
      };
  
      reader.readAsDataURL(file);
    }

    const data = {...contactData};
    data[e.target.name] = '';

    setContactData({...data});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(contactData)
  }

  return (
    <>
      <div className="contacts">
        <div className="contacts__container">
          <div className="contacts__dashboard">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__button" 
              onClick={() => 
                setModalActive(true)
              }
            >
            <DefaultButton
              name={'Add'}
            />
            </div>
          </div>
          <div className="contacts__items">
            {contacts.map((contact) =>
              <ContactItem
                {...contact}
                key={contact._id}
              />
            )}
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={'Add contact'}
      >
        <form onSubmit={handleSubmit} className="form-add">
          <DefaultInput
            name={'Name'}
            options={{
              onChange: handleInput,
              type: 'text',
              name: 'name',
            }}
          />
          <DefaultInput
            name={'Number'}
            options={{
              onChange: handleInput,
              type: 'text',
              name: 'number'
            }}
          />
          <DefaultInput
            name={'Photo'}
            options={{
              onChange: handleInputPhoto,
              type: 'file',
              name: 'photo'
            }}
          />
          <DefaultTextarea
            name={'Description'}
            options={{
              onChange: handleInput,
              name: 'description'
            }}
          />
          <DefaultButton
            name={'Send'}
            options={{
              type: 'submit'
            }}
          />
        </form>
      </Modal>
    </>
  )
}

export default Main;