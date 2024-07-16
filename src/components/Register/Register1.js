import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Register1.css';
import NavBar1 from '../NavBar/NavBar1';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { addUser } from '../../service';

const Register1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name : name,
      email : email,
      password: password,
    }

    const response = addUser(newUser);
    navigate('/login')
    
  };

  return (
    <div>
      <NavBar1 />
      <center>
        <h1 className="four"><AccountCircleIcon style={{ fontSize: "50px" }} /></h1>
        <form onSubmit={handleSubmit} className="five">
          <TextField
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            type={showPassword ? 'text' : 'password'}
            value={password}
            label="Password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />
          <TextField
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            label="Confirm Password"
            placeholder="Re-enter"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />
          <br />

          <Button variant="contained" disableElevation type="submit">
            Register
          </Button>
        </form>
        <br></br>
        <br></br>
      </center>
    </div>
  );
};

export default Register1;
