import {BrowserRouter as Router,Route ,Routes}from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddEmployeeComponent from './Components/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
        <Router>
       
        <Header/>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
            <Route path = "/edit-employee/:id" element = {<AddEmployeeComponent/>}></Route>
          </Routes>
       
          
        </div>
        
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
