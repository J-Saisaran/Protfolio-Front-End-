import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice'; // Adjust the path as necessary
import './PersonalInfo.css'; // Add CSS for styling

// Import icons from MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const PersonalInfoComponent = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.personalInfo);

  useEffect(() => {
    dispatch(fetchPersonalInfo());
  }, [dispatch]);

 
  if (status === 'loading') {
    return <div style={{ color: 'black', textAlign: 'center' }}>Loading...</div>;
  }
  
  if (status === 'failed') {
    return <div style={{ color: 'black', textAlign: 'center' }}>Error: {error}</div>;
  }
  
  return (
    <div className="personal-info-container">
      {info ? (
        <div className="profile-info">
          <img src="Saisaran.jpg" alt="Profile" className="profile-photo" />
          <h1>{info.name}</h1>
          <p>{info.bio}</p>
          <p>
            <EmailIcon /> {info.email}
          </p>
          <p>
            <LinkedInIcon />{' '}
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <GitHubIcon />{' '} 
            <a href={info.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      ) : (
        <div>No personal information found.</div>
      )}
    </div>
  );
};

export default PersonalInfoComponent;
