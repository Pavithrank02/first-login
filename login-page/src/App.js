
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signIn" element={<SignIn />} />
       <Route path="/signUp" element={<SignUp />} />
      </Routes> 
    </div>
  );
}

export default App;
