import { NavLink } from 'react-router-dom';
import useDropdown from '../hooks/useDropdown';
import logo from '../assets/logo-marie-rolland-2.svg';
import instagram from '../assets/logo-instagram.svg';
import { useFetchStrapi } from '../hooks/useFetchStrapi';

function HeaderLayout() {
  const { data } = useFetchStrapi('instagram-link');
  const { Dropdown } = useDropdown();

  const dropdownLinks = [
    { to: 'photography/musicians', label: 'Musiciens' },
    { to: 'photography/equestrian', label: 'Equestre' },
    { to: 'photography/my-universe', label: 'Mon Univers' },
  ];

  return (
    <header className='grid grid-cols-[15rem_1fr_auto] gap-x-10 px-10 my-5 mb-20 items-center'>
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
                    <li className='flex flex-col gap-3'>
                      {dropdownLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                        >
                          {link.label}
                        </NavLink>
                      ))}
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

      <a target='_blank' href={data?.data?.link}>
        <img
          src={instagram}
          alt='Logo Instagram Marie Rolland'
          className='w-10 hover:scale-110 duration-200 transition-all'
        />
      </a>
    </header>
  );
}

export default HeaderLayout;
