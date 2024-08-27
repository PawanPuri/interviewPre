import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createUser } from '../service/api';

const initialUser = {
  UserName: '',
  Email: '',
  Password: ''
};

const SignUp = () => {
  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async () => {
    await createUser(user);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
      onSubmit={saveUser}
    >
      <TextField
        label="UserName"
        name="UserName"
        variant="filled"
        required
        sx={{ m: 1, width: '300px' }}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="Email"
        variant="filled"
        type="email"
        required
        sx={{ m: 1, width: '300px' }}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="Password"
        variant="filled"
        type="password"
        required
        sx={{ m: 1, width: '300px' }}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        onClick={saveUser}
      >
        Signup
      </Button>
    </Box>
  );
};

export default SignUp;
