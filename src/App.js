import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyInfo from './MyInfo';
import PersonalInfo from './PersonalInfo';
import GroupInfo from './GroupInfo';
import Hobbies from './Hobbies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MyInfo />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/group-info" element={<GroupInfo />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
