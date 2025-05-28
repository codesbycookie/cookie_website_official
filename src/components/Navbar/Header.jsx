
import './Header.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">Cookie Inc.</div>
      </div>
      <div className="navbar-right">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <button className="quote-btn">
          <span>Get a Quote</span>
          <span className="quote-icon"> </span> 
        </button>
      </div>
    </header>
  );
};

export default Navbar;

