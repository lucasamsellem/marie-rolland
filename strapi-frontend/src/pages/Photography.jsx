import { Link, Outlet } from 'react-router-dom';

function Photography() {
  return (
    <div>
      <Link to={'musicians'}>Musicians</Link>
      <Link to={'equestrian'}>Equestrian</Link>
      <Link to={'universe'}>Universe</Link>
      <Outlet />
    </div>
  );
}

export default Photography;
