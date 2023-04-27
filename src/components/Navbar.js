import Button from "@mui/joy/Button";
import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning">Dashboard</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active">About</Link>
            <Link className="nav-link active">Contact</Link>
          </div>
        </div>
        <div className="d-flex">
          <Button color="success">
            <Link className="nav-link active" to={'/login'}>Logout</Link>
          </Button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
