import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='side-padding'>
      <div className='grid grid-cols-2 justify-items-center font-semibold text-4xl'>
        <NavLink to={'/photography'}>Photo</NavLink>
        <NavLink to={'/management'}>Management</NavLink>
      </div>
    </div>
  );
}
