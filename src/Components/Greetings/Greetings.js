import React from 'react';
import './greetings.css';

function Greeting(props) {
  function renderGreeting(lang) {
    const cases = {
      en: 'Hello',
      de: 'Hallo',
      es: 'Holla',
      fr: 'Bonjour',
    };

    return cases[lang];
  }

  return (
     <div className="greeting">
         {`${renderGreeting(props.lang)} ${props.children}`}
     </div>
  );
}

export default Greeting;
