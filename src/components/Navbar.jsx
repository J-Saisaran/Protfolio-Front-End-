import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" component={Link} to="/">
          Personal Info
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
