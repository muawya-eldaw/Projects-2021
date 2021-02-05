import react from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const nav_style = {
	color: 'white',
	fontWeight: 'bold',
	fontStyle: 'italic'
}

function Nav() {
  return (
    <div>
      <nav>
		<h3>Logo</h3>
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
