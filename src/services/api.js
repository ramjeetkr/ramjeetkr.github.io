import axios from 'axios';

// Configure baseURL to your ASP.NET API base, e.g. http://localhost:5000/api
const baseURL = process.env.REACT_APP_API_BASE || '/api';

const client = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// Simple fallback mock when no backend available
const useMock = false;

const mockData = {
  employees: [
    { id:1, employeeCode:'00000001', name:'Raj Kumar', department:'HR', designation:'Manager' },
    { id:2, employeeCode:'00000002', name:'Sita Devi', department:'Finance', designation:'Clerk' },
  ],
  attendance: [],
  payroll: []
};

export default {
  async get(path){ 
    if(useMock) {
      if(path.startsWith('/employees')) return { data: mockData.employees };
      return { data: [] };
    }
    const res = await client.get(path);
    return res;
  },
  async post(path, payload){
    if(useMock){ return { data: payload }; }
    const res = await client.post(path, payload);
    return res;
  },
  async put(path, payload){
    if(useMock){ return { data: payload }; }
    const res = await client.put(path, payload);
    return res;
  },
  async delete(path){
    if(useMock){ return { data: {} }; }
    const res = await client.delete(path);
    return res;
  }
};
