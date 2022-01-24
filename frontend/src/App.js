import './styles/main.scss';
import Navigation from './components/Navigation'
import {Route, Routes} from 'react-router-dom'
import Menu from './pages/Menu'
import Checks from './pages/Checks'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/checks" element={<Checks/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
