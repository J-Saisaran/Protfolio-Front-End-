import React from 'react';
import { AppBar, Toolbar,Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{top:"0px"}} sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/" sx={{ textAlign: 'center', flexGrow: 1 }}>
          My Portfolio
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
