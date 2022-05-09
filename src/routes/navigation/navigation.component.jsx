import { Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className='navbar'>
        <p>About</p>
        <p>What We Do</p>
        <p>How we do it</p>
        <p>Case studies</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
