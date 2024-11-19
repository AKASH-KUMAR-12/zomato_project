import logo from './logo.svg';
import './App.css';
import Login from './assets/login';
import Home from './assets/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     <Home/>
    </div>
      //   <>
      //   <BrowserRouter>
      //     <Routes>
      //       <Route path="/login" element={<Login />} />
      //       <Route path="/register" element={<Register />} />
      //       <Route path="/" element={<Home />} />
      //       <Route path="/job/:id" element={<JobDetail />} />
      //       <Route path="/create" element={<Create />} />
      //       <Route path="/edit/:id" element={<Edit />} />
      //     </Routes>
      //   </BrowserRouter>
        
      // </>
  );
}

export default App;
