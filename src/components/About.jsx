import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const About = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.personalInfo);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPersonalInfo());
    }
  }, [status, dispatch]);

  

  if (status === 'loading') {
    return <Typography variant="h6" style={{ color: 'black', textAlign: 'start' }}>Loading...</Typography>;
  }
  
  if (status === 'failed') {
    return <Typography variant="h6" style={{ color: 'black', textAlign: 'start' }}>Error: {error}</Typography>;
  }
  

  return (
    <Grid container spacing={3} style={{
      minHeight: '100vh',
      padding: '20px'
    }}>
      <Grid item xs={12} md={12}>
        <Card style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4">Personal Information</Typography>
            <Typography variant="h6">{info.name}</Typography>
            <Typography variant="body1">{info.bio}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12}>
        <Card style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4">Skills</Typography>
            <Typography variant="body1">{info.skills.join(', ')}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12}>
        <Card style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4">Education</Typography>
            {info.education.map((edu, index) => (
              <div key={index}>
                <Typography variant="body1">{edu.degree} - {edu.institution}</Typography>
                <Typography variant="body2">{formatDate(edu.startDate)} to {formatDate(edu.endDate)}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12}>
        <Card style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="body1">Email: {info.email}</Typography>
            <Typography variant="body1">Phone: {info.contact.phone}</Typography>
            <Typography variant="body1">Address: {info.contact.address}</Typography>
            <Typography variant="body1">
              LinkedIn: <a href={info.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>{info.linkedin}</a>
            </Typography>
            <Typography variant="body1">
              GitHub: <a href={info.github} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>{info.github}</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;
