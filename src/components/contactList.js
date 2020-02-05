import React from 'react';
import Contact from './Contact'

function ContactList(props){

  return (
    <div>
        {user.map((user) => (
            <Contact
                 name={user.name}
                 avatar={user.avatar}
                 online={user.online}
            />
        ))}
    </div>
 );
 }

const user = [
  {
    avatar:"https://randomuser.me/api/portraits/women/39.jpg",
    name: "Colleen Crawford",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    name: "Donald Rhodes",
    online: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Wanda Douglas",
    online: true,
  },
  {
    avatar:"https://randomuser.me/api/portraits/men/35.jpg",
    name: "Ruben May",
    online: false,
  },
  {
    avatar:"https://randomuser.me/api/portraits/women/57.jpg",
    name: "Claudia Fuller",
    online: true,
  },
];

export default ContactList;
