import React from 'react';
import ContactList from './components/ContactList';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <ContactList/>
      <Contact
        avatar="https://randomuser.me/api/portraits/men/64.jpg"
        name="Steve Weaver"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/64.jpg"
        name="Judy Walters"
        online={true}
      />
      <Contact
         avatar="https://randomuser.me/api/portraits/men/3.jpg"
         name="Dale Mills"
         online={false}
      />
    </div>
  );
}

export default App;