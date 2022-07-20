import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home'
import UserDetails from './components/UserDetails/UserDetails';
import Header from './components/Header/Header';
import './App.css';

const App = () => (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/user-details' element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
)

export default App;
