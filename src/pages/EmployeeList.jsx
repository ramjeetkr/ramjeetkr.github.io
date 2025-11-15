import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function EmployeeList(){
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.get('/employees').then(res=>{
      setEmployees(res.data || []);
      setLoading(false);
    }).catch(err=>{
      console.error(err); setLoading(false);
    });
  },[]);

  const remove = async (id) => {
    if(!window.confirm('Delete employee?')) return;
    await api.delete(`/employees/${id}`);
    setEmployees(employees.filter(e=>e.id!==id));
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Employees</h3>
        <Link to="/employees/add" className="btn btn-primary">Add Employee</Link>
      </div>
      {loading ? <div>Loading...</div> : (
        <table className="table table-striped">
          <thead><tr><th>#</th><th>Code</th><th>Name</th><th>Dept</th><th>Designation</th><th>Actions</th></tr></thead>
          <tbody>
            {employees.map(emp=>(
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.employeeCode}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>
                  <Link className="btn btn-sm btn-outline-secondary me-2" to={`/employees/edit/${emp.id}`}>Edit</Link>
                  <button className="btn btn-sm btn-outline-danger" onClick={()=>remove(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
