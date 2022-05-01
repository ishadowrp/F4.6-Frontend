import React from 'react';
import '../css/App.css';
import {
    Link,
    Outlet
} from "react-router-dom";

function App() {
  console.log("App");
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <Link to="home" className="nav-link">Home</Link>
        <Link to="categories" className="nav-link">Categories</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
