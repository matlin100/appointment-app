import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [appointments, setAppointments] = useState([]);

  // This function simulates an authentication check.
  const loginAdmin = () => {
    if (adminUsername === 'admin' && adminPassword === 'jowDolan123!@#') {
      setIsLoggedIn(true);
      // Fetch appointments from the database and set them in the state
      // You can add your logic to fetch appointments here.
    } else {
      alert('Invalid username or password');
    }
  };

  const cancelAppointment = (index) => {
    // Implement logic to cancel the appointment in the database
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
            <Link to="/">Go to User Appointment</Link>  
          <h1>Admin Dashboard</h1>
          <h2>Scheduled Appointments:</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                {appointment.date} at {appointment.time}
                <button onClick={() => cancelAppointment(index)}>Cancel</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <Link to="/">לקביעת תורים</Link>  
          <h1>כניסת מנהלים </h1>
          <input
            type="text"
            placeholder="Username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button onClick={loginAdmin}>התחברות</button>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
