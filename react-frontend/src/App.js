import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './containers/LoginPage';
import { Dashboard } from './containers/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:action" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
