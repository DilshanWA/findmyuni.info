import Homepage from './component/pages/home';
import Resultpage from './component/pages/result';
import './component/styles/result.css';
import './component/styles/aboutus.css';
import Contactus from './component/pages/Contact_us'
import Aboutus from './component/pages/About_us';
import AdminLogin from './component/pages/serverlogin';
import Datafill from './component/pages/datafill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resultpage" element={<Resultpage />} />
        <Route path="/" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/datafill" element={<Datafill />} />
        <Route path="/serverlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
