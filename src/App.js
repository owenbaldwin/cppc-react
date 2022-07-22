import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Gallery from './routes/gallery/gallery.component';
import Blog from './routes/blog/blog.component';
import ContactPage from './routes/contact/contact.component';
import CaseStudiesPage from './routes/case-studies-page/case-studies-page.component';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":gallery" element={<Gallery />} />
          <Route path="casestudies/:gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="casestudies" element={<CaseStudiesPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
