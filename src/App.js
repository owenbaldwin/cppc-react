import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Gallery from './routes/gallery/gallery.component';


function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
