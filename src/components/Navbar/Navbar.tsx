import { Link } from 'react-router-dom';
import './styles/css/Navbar.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" style={{textDecoration: 'none'}}><h1>Resumeness</h1></Link>
      <div id="links">
        <Link to="/"><span>Home</span></Link>
        <Link to="/resume"><span>Resume</span></Link>
        <Link to="/cover-letter"><span>Cover Letter</span></Link>
        <Link to="/about"><span>About</span></Link>
      </div>
    </nav>
  );
};

export default NavBar;