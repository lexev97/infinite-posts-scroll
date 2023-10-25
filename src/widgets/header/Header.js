import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'><h1 className='header__heading'>INFINITE POSTS LIST</h1></Link>
    </header>
  );
};

export default Header;
