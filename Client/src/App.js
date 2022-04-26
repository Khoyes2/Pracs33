import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Products from "./components/pages/BooksList";
import NavBar from './components/nav/NavBar';
import Msg from './components/Msg';

function App() {
  return (
  

   <Router>
   <NavBar />
   <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/products" element={   <Products />}/>
   </Routes>

 </Router>

  );
}

export default App;
