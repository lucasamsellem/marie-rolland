import { Link } from 'react-router-dom';

function HeaderLayout() {
  return (
    <header>
      <nav className='bg-gray-900 text-white flex items-center justify-between p-4 '>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/photography'>Photographie</Link>
          </li>
          <li>
            <Link to='/management'>Management</Link>
          </li>
          <li>
            <Link to='/about'>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderLayout;
