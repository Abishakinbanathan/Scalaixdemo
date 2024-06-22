import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from './page/Home';
 import Details from './page/Details';

function App() {
 return (
   <BrowserRouter>
     <Routes>
             <Route path="/" element={<Home/>}></Route>
 
             <Route path="/details/:id" element={<Details />} />
 
        
        
     </Routes>
   </BrowserRouter>
   
 );
}

export default App;
