import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import './navigation.styles.scss';
import { useParams } from 'react-router-dom';

const Navigation = () => {
  const {urlParam} = useParams();

  console.log("hello");
  console.log({urlParam});
  console.log("hello");

  return (
    <div className='navigation-container'>
      <div className='navigation-inner'>
        <div id='blog-top-of-page'></div>

        <div className='nav-blur'></div>
        <div className='navbar'>
          <input type="checkbox" class="menu-btn" id="menu-btn" />
          <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>
          <ul class="tabs">
            <li><a href="/">Home</a></li>

            <li>
              <a href="/contact">Contact</a>
            </li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;


// { {urlParam} === "/blog" ? <a href="#ctc">KontaKt</a> : <a href="/">Contaact</a> }

// <li><p>About</p></li>
// <li><p>What We Do</p></li>
// <li><p>How we do it</p></li>
// <li><p>Case studies</p></li>
