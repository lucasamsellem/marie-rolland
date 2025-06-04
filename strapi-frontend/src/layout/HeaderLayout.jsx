import { NavLink } from 'react-router-dom';
import useDropdown from '../hooks/useDropdown';
import logo from '../assets/logo-marie-rolland-2.svg';

function HeaderLayout() {
  const { Dropdown } = useDropdown();

  return (
    <header className='grid grid-cols-[15rem_1fr] px-5 my-5'>
      <img src={logo} alt='Logo de la photographe Marie Rolland' />

      <nav className='text-black flex items-center justify-end'>
        <ul className='flex space-x-10'>
          <li>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/'>
              Accueil
            </NavLink>
          </li>

          <li>
            <Dropdown>
              {/* eslint-disable no-unused-vars */}
              {({ toggle, AnimatedMenu }) => (
                <>
                  <button className='nav-link cursor-pointer' onClick={toggle}>
                    Photographie
                  </button>
                  <AnimatedMenu>
                    <li>
                      <NavLink className='dropdown-link' to={'photography/musicians'}>
                        Musiciens
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-link' to={'photography/equestrian'}>
                        Équestre
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='dropdown-link' to={'photography/universe'}>
                        Mon univers
                      </NavLink>
                    </li>
                  </AnimatedMenu>
                </>
              )}
            </Dropdown>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/management'
            >
              Management
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/about'
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderLayout;
