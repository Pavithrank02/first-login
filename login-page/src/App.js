
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SuccessCard from './components/SuccessCard';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signIn" element={<SignIn />} />
       <Route path="/signUp" element={<SignUp />} />
       <Route path="/success" element={<SuccessCard />} />
       <Route path="/ss.js"  />
      </Routes> 
    </div>
  );
}

export default App;
