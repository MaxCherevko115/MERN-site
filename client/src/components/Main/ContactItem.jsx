import "./ContactItem.css";
import {Link} from "react-router-dom";

const ContactItem = ({_id, name, photo, number}) => {
  return (
    <Link to={`/contact/${_id}`} className="contact-item">
      <div className="contact-item__image">
        <img 
          src={photo} 
          alt="Profile_photo"
        />
      </div>
      <div className="contact-item__text">
        <h3 className="contact-item__name">{name}</h3>
        <div className="contact-item__number">{number}</div>
      </div>
    </Link>
  );
}

export default ContactItem;