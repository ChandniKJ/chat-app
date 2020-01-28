import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/35.jpg"
        name ="Ruben May"
        status = {true}
      />
       <Contact
        avatar="https://randomuser.me/api/portraits/women/57.jpg"
        name ="Claudia Fuller"
        status = {false}
      />
       <Contact
        avatar="https://randomuser.me/api/portraits/men/71.jpg"
        name ="Daryl Dunn"
        status = {true}
      />
    </div>
  );
}

export default App;
