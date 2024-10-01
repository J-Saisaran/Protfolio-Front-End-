import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../redux/projectsSlice';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import './Projects.css';

const Projects = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

   if (status === 'loading') {
    return <div style={{ color: 'black', textAlign: 'center' }}>Loading...</div>;
  }
  
  if (status === 'failed') {
    return <div style={{ color: 'black', textAlign: 'center' }}>Error: {error}</div>;
  }
  

  return (
    <>
      <div className="project-list-container">
        <div className="header-background">
          <h1 className="project-header">My Projects</h1>
        </div>
        {list.length > 0 ? (
          list.map((project, index) => (
            <Card key={project.id || index} className="project-card" style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Title: {project.title}
                </Typography>
                <Typography variant="body1">
                  Description: {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                  GitHub Link
                </Button>
                <Button size="small" href={project.deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                  Live Link
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <div>No projects found.</div>
        )}
      </div>
    </>
  );
};

export default Projects;
