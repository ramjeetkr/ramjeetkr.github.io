import React, {useState, useEffect} from 'react';
import api from '../services/api';

export default function Attendance(){
  const [records, setRecords] = useState([]);
  useEffect(()=> {
    api.get('/attendance').then(res=> setRecords(res.data || []));
  },[]);
  return (
    <div>
      <h3>Attendance</h3>
      <p>This page should list attendance, allow bulk upload (CSV/XLSX), manual correction, and report generation.</p>
      <table className="table">
        <thead><tr><th>Date</th><th>Employee</th><th>Status</th></tr></thead>
        <tbody>
          {records.length===0 ? <tr><td colSpan="3">No records</td></tr> : records.map((r,i)=>(
            <tr key={i}><td>{r.date}</td><td>{r.employee}</td><td>{r.status}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
