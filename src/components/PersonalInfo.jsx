import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice'; // Adjust the path as necessary
import './PersonalInfo.css'; // Add CSS for styling

const PersonalInfoComponent = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.personalInfo);

  useEffect(() => {
    dispatch(fetchPersonalInfo());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="personal-info-container">
      {info ? (
        <div className="profile-info">
          <img src="Saisaran.jpg" alt="Profile" className="profile-photo" />
          <h1>{info.name}</h1>
          <p>{info.bio}</p>
          <p>{info.email}</p>
          <p>{info.linkedin}</p>
          <p>{info.github}</p>
        </div>
      ) : (
        <div>No personal information found.</div>
      )}
    </div>
  );
};

export default PersonalInfoComponent;