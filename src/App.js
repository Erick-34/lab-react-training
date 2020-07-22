import React from 'react';
import './App.css';

import Card from './Components/Card/Card';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';
import Star from './Components/Stars/Star';
import DriverCard from './Components/DriverCard/DriverCard';

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

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <Star>0</Star>
      <Star>1</Star>
      <Star>2</Star>
      <Star>3</Star>
      <Star>3</Star>
      <Star>4</Star>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
