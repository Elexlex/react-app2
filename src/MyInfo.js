import React from 'react';
import { Link } from 'react-router-dom';

function MyInfo() {
  return (
    <div className="container">
      <h1>Я пашочек</h1>
      <p>Коротка розповідь про себе</p>
      <h2>Місця, котрі я хотів би побачити:</h2>
      <ul>
        <li>Канада</li>
        <li>Фінляндія</li>
        <li>Латвія</li>
      </ul>
      <nav>
        <ul>
          <li><Link to="/personal-info">Особиста інформація</Link></li>
          <li><Link to="/group-info">Номер групи</Link></li>
          <li><Link to="/hobbies">Мої хобі</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MyInfo;
