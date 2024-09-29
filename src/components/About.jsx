import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const About = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.personalInfo);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPersonalInfo());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (status === 'failed') {
    return <Typography variant="h6">Error: {error}</Typography>;
  }

  return (
    <Grid container spacing={3} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: 'white', color: 'black' }}>
          <CardContent>
            <Typography variant="h5">Personal Information</Typography>
            <Typography variant="h6">{info.name}</Typography>
            <Typography variant="body1">{info.bio}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: 'white', color: 'black' }}>
          <CardContent>
            <Typography variant="h5">Skills</Typography>
            <Typography variant="body1">{info.skills.join(', ')}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: 'white', color: 'black' }}>
          <CardContent>
            <Typography variant="h5">Education</Typography>
            {info.education.map((edu, index) => (
              <div key={index}>
                <Typography variant="body1">{edu.degree} - {edu.institution}</Typography>
                <Typography variant="body2">{edu.startDate} to {edu.endDate}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: 'white', color: 'black' }}>
          <CardContent>
            <Typography variant="h5">Contact</Typography>
            <Typography variant="body1">Email: {info.email}</Typography>
            <Typography variant="body1">Phone: {info.contact.phone}</Typography>
            <Typography variant="body1">Address: {info.contact.address}</Typography>
            <Typography variant="body1">
              LinkedIn: <a href={info.linkedin} target="_blank" rel="noopener noreferrer">{info.linkedin}</a>
            </Typography>
            <Typography variant="body1">
              GitHub: <a href={info.github} target="_blank" rel="noopener noreferrer">{info.github}</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;
