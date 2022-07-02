import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './containers/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:action" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
