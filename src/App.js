import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import ShiftManagement from './pages/ShiftManagement';
import GatePass from './pages/GatePass';
import ApprovalFlow from './pages/ApprovalFlow';
import MasterData from './pages/MasterData';

export default function App(){
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<EmployeeForm />} />
          <Route path="/employees/edit/:id" element={<EmployeeForm />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/shifts" element={<ShiftManagement />} />
          <Route path="/gatepass" element={<GatePass />} />
          <Route path="/approvals" element={<ApprovalFlow />} />
          <Route path="/master" element={<MasterData />} />
        </Routes>
      </div>
    </div>
  );
}
