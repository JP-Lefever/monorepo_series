import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">JS Monorepo</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/programs">Programmes</NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
