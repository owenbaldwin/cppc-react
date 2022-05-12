import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className='navigation-inner'>
        <div className='nav-blur'></div>
        <div className='navbar'>
          <input type="checkbox" class="menu-btn" id="menu-btn" />
          <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>
          <ul class="tabs">
            <li><p>About</p></li>
            <li><p>What We Do</p></li>
            <li><p>How we do it</p></li>
            <li><p>Case studies</p></li>
            <li><p>Contact</p></li>
            <li><p>Blog</p></li>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;
