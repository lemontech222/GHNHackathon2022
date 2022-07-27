import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './containers/LoginPage';
import { Dashboard } from './containers/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './containers/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:action" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
