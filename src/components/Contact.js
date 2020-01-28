import React from 'react';
import './Contact.css'

function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} className="avatar" />
      <h4 className="name">{props.name}</h4>
      <div className="status">
        {props.online ? 'Online' : 'Offline'} />
        <span className ="status-text">
          {props.online ? 'Online' : 'Offline'}
        </span>
      </div> 
    </div>
       );
}

export default Contact;

  