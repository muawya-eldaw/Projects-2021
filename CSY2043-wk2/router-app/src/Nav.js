import react from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const nav_style = {
	color: 'white',
	fontWeight: 'bold',
	fontStyle: 'italic'
}

function Nav(props) {
  return (
    <div>
      <nav>
      	<div>
			<h3>Muawya Eldaw</h3>
			<h5>{props.emailAdd}</h5>
		</div>
		<ul className="nav_links">
			<Link style={nav_style} to="/">
				<li>Home</li>
			</Link>
			<Link style={nav_style} to="/AboutMe">
				<li>AboutMe</li>
			</Link>
			<Link style={nav_style} to="/Study">
				<li>Study</li>
			</Link>
			<Link style={nav_style} to="/Hobbies">
				<li>Hobbies</li>
			</Link>
		</ul>
      </nav>
    </div>
  );
}

export default Nav;
