import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage';
import { AuthProvider } from './context/AuthContext';
import './index.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex bg-indigo-200 justify center">
        

          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:type" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;