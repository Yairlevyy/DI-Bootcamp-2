import {Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ErrorBoundary from './components/ErrorBoundary'

function Home() {
  return (
    <div>Home</div>
  )
}

function Profile() {
  return (
    <div>Profile</div>
  )
}

function Shop() {
  throw new Error("It's an error")
  return (
    <div>Shop</div>
  )
}


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">React App</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        }>
        </Route>
        <Route path="/profile" element={
          <ErrorBoundary>
            <Profile />
          </ErrorBoundary>
        }>
        </Route>
        <Route path="/shop" element={
          <ErrorBoundary>
            <Shop />
          </ErrorBoundary>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
