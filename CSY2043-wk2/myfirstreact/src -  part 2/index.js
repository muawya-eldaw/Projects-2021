import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a student!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));