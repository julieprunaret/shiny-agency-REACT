import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/5">Questions</Link>
    </nav>
  );
}

export default Header;
