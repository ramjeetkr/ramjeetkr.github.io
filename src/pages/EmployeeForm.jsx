import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

export default function EmployeeForm(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({ employeeCode:'', name:'', department:'', designation:'' });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(id){
      api.get(`/employees/${id}`).then(res=> setModel(res.data)).catch(()=>{});
    }
  },[id]);

  const save = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(id) await api.put(`/employees/${id}`, model);
    else await api.post('/employees', model);
    setLoading(false);
    navigate('/employees');
  }

  return (
    <div>
      <h3>{id ? 'Edit' : 'Add'} Employee</h3>
      <form onSubmit={save}>
        <div className="mb-3">
          <label>Employee Code</label>
          <input className="form-control" value={model.employeeCode} onChange={e=>setModel({...model, employeeCode:e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" value={model.name} onChange={e=>setModel({...model, name:e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input className="form-control" value={model.department} onChange={e=>setModel({...model, department:e.target.value})} />
        </div>
        <div className="mb-3">
          <label>Designation</label>
          <input className="form-control" value={model.designation} onChange={e=>setModel({...model, designation:e.target.value})} />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
      </form>
    </div>
  );
}
