import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-marie-rolland-2.svg';
import instagram from '../assets/logo-instagram.svg';
import { useFetchStrapi } from '../hooks/useFetchStrapi';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/photography', label: 'Photographie' },
  { to: '/management', label: 'Management' },
  { to: '/about', label: 'À propos' },
];

function HeaderLayout() {
  const { data } = useFetchStrapi('instagram-link');

  return (
    <header className='grid grid-cols-[15rem_1fr_auto] gap-x-10 px-10 my-5 mb-15 items-center'>
      <img src={logo} alt='Logo de la photographe Marie Rolland' />

      <nav className='text-black flex items-center justify-end'>
        <ul className='flex space-x-10'>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {label}
              </NavLink>
            </li>
          ))}
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

{
  /* <Dropdown>
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
                          className={({ isActive }) =>
                            `opacity-50 hover:opacity-70 text-black transition-all duration-200 ${isActive ? 'opacity-100' : ''}`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </li>
                  </AnimatedMenu>
                </>
              )}
            </Dropdown> */
}
