import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Task from './pages/Task';
import Goal from './pages/Goal';

function App() {
  
  return (
    <div className='app'>
      <div className='page'>
        
      <Navbar />
      <div className='section'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task" element={<Task />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/notes" element={<Notes />} />
         <Route path="/notes" element={<Notes />} />
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
