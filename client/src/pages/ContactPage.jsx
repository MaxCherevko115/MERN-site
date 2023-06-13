import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../api/index.js";

import { DefaultInput, DefaultTextarea, DefaultButton, DefaultButtonLink } from "../components/DefaultElements.jsx";

import "./ContactPage.css";

const ContactPage = () => {
  const [contactData, setContactData] = useState({});
  const [contactEditData, setContactEditData] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getContact(setContactData, id);
  }, [id])

  const hanndleInput = (e) => {
    setContactEditData({...contactEditData, [e.target.name]: e.target.value});
  }

  const hanndleEditButton = () => {
    console.log(contactEditData);
  }

  const hanndleDeleteButton = () => {
  }

  return(
    <div className="contact">
        <div className="contact__container">
          <div className="contact__body">
            <div className="contact__image">
              <img 
                src={contactData.photo} 
                alt="Profile_Photo"
              />
            </div>
            <div className="contact__dashboard">
              <DefaultInput
                name={'Name'}
                options={{
                  onChange: hanndleInput,
                  name: 'name',
                  type: 'text',
                }}
              />
              <DefaultInput
                name={'Number'}
                options={{
                  onChange: hanndleInput,
                  name: 'number',
                  type: 'text',
                }}
              />
              <DefaultTextarea
                name={'Description'}
                options={{
                  onChange: hanndleInput,
                  name: 'description',
                  type: 'text',
                }}
              />
              <div className="contact__buttons">
              <DefaultButtonLink
                name={'Edit'}
                color={'blue'}
                options={{
                  onClick: hanndleEditButton
                }}
              />
              <DefaultButton
                name={'Delete'}
                color={'red'}
                options={{
                  onClick: hanndleDeleteButton
                }}
              />
              </div>
              <DefaultButtonLink
                name={'Back'}
                options={{
                  to: '/'
                }}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactPage;