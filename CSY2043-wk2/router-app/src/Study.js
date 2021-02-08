import react from 'react';
import './App.css';

function Study(props) {
  return (
    <div>
      <h1>Study page details go here!</h1>
      <h2>I study the following modules:</h2>
      <h3>{props.module1}</h3>
      <h3>{props.module2}</h3>
      <h3>{props.module3}</h3>
    </div>
  );
}

export default Study;
