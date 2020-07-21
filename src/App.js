import React from 'react';
import './App.css';

import Card from './Components/Card/Card';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';

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
      <p>
        <strong>
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </strong>
      </p>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <p>
        <strong>
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </strong>
      </p>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
