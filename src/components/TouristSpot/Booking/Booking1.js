import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking1.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { addUser1 } from '../../../service';

const Booking1 = () => {
  const navigate = useNavigate();

  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    stayingDate: '',
    leavingDate: '',
    spotName: '',
  });

  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser1 = {
      name: bookingDetails.name,
      email: bookingDetails.email,
      phoneNumber: bookingDetails.phoneNumber,
      stayingDate: new Date(bookingDetails.stayingDate), 
      leavingDate: new Date(bookingDetails.leavingDate), 
      spotName: bookingDetails.spotName,
    };
    const response1 = addUser1(newUser1);
    navigate('/visit');
  };
  

  return (
    <div>
      <Link to='/visit/touristspots'>
        <Button variant="contained" disableElevation style={{marginTop:"20px",marginLeft:"20px"}}>
              Back
            </Button>
      </Link> 
    <div className="booking-form-container">
      <center>
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={bookingDetails.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={bookingDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Spot Name:
            <select
              name="spotName"
              value={bookingDetails.spotName}
              onChange={handleInputChange}
              required
            >
              <option value=""></option>
              <option value="Burj Khalifa">Burj Khalifa</option>
              <option value="Burj Al Arab">Burj Al Arab</option>
              <option value="The Dubai Fountain">The Dubai Fountain</option>
            </select>
          </label>

          <label>
            Staying Date:
            <input
              type="date"
              name="stayingDate"
              value={bookingDetails.stayingDate}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Leaving Date:
            <input
              type="date"
              name="leavingDate"
              value={bookingDetails.leavingDate}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit">Confirm Booking</button>
        </form>

        {bookingSuccessful && (
          <p>Your booking was successful! We look forward to hosting you.</p>
        )}
      </center>
    </div>
    </div>
  );
};

export default Booking1;
