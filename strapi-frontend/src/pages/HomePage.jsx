import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='side-padding'>
      <ul className='grid grid-cols-2'>
        <li>
          <NavLink to={'/photography'}>Photo</NavLink>
        </li>
        <li>
          <NavLink to={'/management'}>Management</NavLink>
        </li>
      </ul>
    </div>
  );
}
