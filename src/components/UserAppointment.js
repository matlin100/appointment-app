import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const scheduleAppointment = () => {
    // Implement logic to save the appointment to the database
    const newAppointment = {
      date: selectedDate,
      time: selectedTime,
    };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div>
      <Link to="/admin">כניסת מנהלים</Link>
      <h1>קבית תורים </h1>
      <label>תאריך:</label>
      <input type="date" onChange={handleDateChange} />
      <br />
      <label>שעה</label>
      <input type="time" onChange={handleTimeChange} />
      <br />
      <button onClick={scheduleAppointment}>קביעת תור</button>
      <h2>התורים שלך</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAppointment;
