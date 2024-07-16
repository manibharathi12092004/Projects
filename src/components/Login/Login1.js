import React, { useState, useEffect } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login1.css';
import NavBar1 from '../NavBar/NavBar1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth-context';
import { getUser } from '../../service';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUser();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchingUser = users.find(user => user.email === email && user.password === password);
    if (matchingUser) {
      console.log('Login Successful');
      navigate("/");
    } else {
      alert("Invalid User Credential");
      console.log('Login Failed');
    }
  };

  return (
    <div>
      <NavBar1 />
      <center>
        <h1 className="second"><AccountCircleIcon style={{ fontSize: "50px" }} /></h1>
        <form onSubmit={handleSubmit} className="third">
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
            placeholder="Enter Password"
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
          <br />

          <Button variant="contained" disableElevation type="submit">
            Login
          </Button>
        </form>
        <br></br>
        <br></br>
        Don't have an Account{' '}
        <Link to='/register'>
          <Button variant="contained" disableElevation type="submit">
            Register
          </Button>
        </Link>
      </center>
    </div>
  );
};

export default Login1;
