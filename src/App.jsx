import react from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Website from './screens/Website';
import Login from './screens/Login';
import DashBoard from './screens/DashBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
            <Route path='/' element={ <Website /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/admin' element={ <DashBoard /> }>
              
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
