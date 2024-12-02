import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './About.css'

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const About = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.personalInfo);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPersonalInfo());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  if (status === 'loading') {
    return <Typography variant="h6" style={{ color: 'black', textAlign: 'start' }}>Loading...</Typography>;
  }

  if (status === 'failed') {
    return <Typography variant="h6" style={{ color: 'black', textAlign: 'start' }}>Error: {error}</Typography>;
  }

  return (
    <Grid
      container
      spacing={3}
      style={{
        minHeight: '100vh',
        padding: '20px',
      }}
      className={animationTriggered ? 'circle-in-animation' : ''}
    >
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
                <Typography variant="body1">
                  <Typography variant="body1" style={{ fontWeight: 'bold', margin: '3px' }}>College: </Typography>{edu.institution}
                </Typography>
                <Typography variant="body1">
                  <Typography variant="body1" style={{ fontWeight: 'bold', margin: '3px' }}>Degree:  </Typography>{edu.degree}
                </Typography>
                <Typography variant="body2">
                  <Typography variant="body1" style={{ fontWeight: 'bold', margin: '3px' }}>From:  </Typography> {formatDate(edu.startDate)}{' '}
                  <Typography variant="body1" style={{ fontWeight: 'bold', margin: '3px' }}>To:  </Typography>{formatDate(edu.endDate)}
                </Typography>
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
              LinkedIn: <a href={info.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>LinkedIn</a>
            </Typography>
            <Typography variant="body1">
              GitHub: <a href={info.github} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>GitHub</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;
