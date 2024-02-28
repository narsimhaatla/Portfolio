import { Route,Routes } from 'react-router-dom';
import '../css/App.css';
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Notfound from '../pages/Notfound'
import Side from './Sidebar'
import Nav from './Nav';
import Foot from './Footer'
import Prof from './Profiles'
function App() {
  return (
    <div>
      <Nav/>
    <div className='flex'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/c' element={<Contact/>}/>
          <Route path='/p' element={<Projects/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
        <div className='fixed'>
          <Side/>
        </div>
      </div>
      <div className='fle'>
        <div className='fixe'>
          <Prof/>
        </div>
      
      </div>
      <Foot/>
    </div>
  );
}

export default App;
