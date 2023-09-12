import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserAppointment from './components/UserAppointment';
import AdminDashboard from './components/AdminDashboard';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<UserAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
