import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Nav from "./components/Navigation/Nav";
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"
import Hub from "./components/pages/Hub/Hub"
import Startup from "./components/pages/Startup/Startup"

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard">
              <Route path="hub" element={<Hub />} />
              <Route path="startup" element={<Startup />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
