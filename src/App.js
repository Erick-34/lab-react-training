import React from 'react';
import './App.css';

import Card from './Components/Card/Card';

function App() {
  return (
    <div class="root">
      <Card
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
      />

      <Card
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        firstName="Obrien"
        lastName="Delores "
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
      />
      
    </div>
  );
}

export default App;
