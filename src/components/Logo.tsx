import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo" aria-label="Ernest Daniel home">
      <span className="logo-mark">
        <span className="logo-letter">E</span>
        <span className="logo-dot">•</span>
        <span className="logo-letter logo-letter-accent">D</span>
      </span>
    </Link>
  );
};

export default Logo;