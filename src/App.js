import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/search' element = {<SearchPage/>}/>
        

      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
