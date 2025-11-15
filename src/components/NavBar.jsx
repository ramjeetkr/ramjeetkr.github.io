import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">EmpMgmt</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/employees">Employees</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/attendance">Attendance</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/payroll">Payroll</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/shifts">Shifts</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/gatepass">GatePass</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/approvals">Approvals</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/master">Masters</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
