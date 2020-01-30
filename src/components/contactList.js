import React from 'react';
import Contact from './Contact'

const user = [
  {
    id: 1,
    avatar:"https://randomuser.me/api/portraits/women/39.jpg",
    name: "Colleen Crawford",
    online: true
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    name: "Donald Rhodes",
    online: false
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Wanda Douglas",
    online: true
  },
  {
    id: 4,
    avatar:"https://randomuser.me/api/portraits/men/35.jpg",
    name: "Ruben May",
    online: false
  },
  {
    id: 5,
    avatar:"https://randomuser.me/api/portraits/women/57.jpg",
    name: "Claudia Fuller",
    online: true
  },
];
  
  const contactList = () => (
    <div>
      {user.map(item => (
      <Contact key={item.id} name={item.name} avatar={item.avatar} online={item.online} />
      ))}
    </div>
  );
  
  export default contactList;
