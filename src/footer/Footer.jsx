import React from 'react';
import { Container, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333', // Dark background color
                color: '#ffffff', // Bright text color
                padding: '20px 0', // Padding for the footer
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 'bold', mb: 0.5, paddingRight: '10px' }}>
                            Saisaran J
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', paddingRight: '10px' }}>
                            © {new Date().getFullYear()} Saisaran J. All rights reserved.
                        </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'end', alignItems: 'center', flexDirection: 'row' }}>
                        <Link href="#" sx={{ mx: 1, fontSize: '0.75rem' }}>
                            Privacy Policy
                        </Link>
                        <Link href="#" sx={{ mx: 1, fontSize: '0.75rem' }}>
                            Terms of Service
                        </Link>
                        <Link href="#" sx={{ mx: 1, fontSize: '0.75rem' }}>
                            Contact Us
                        </Link>
                    </Box>
                    
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <IconButton href="https://www.facebook.com/Saisaran1027" sx={{ mx: 0.5 }}  >
                            <Facebook fontSize="small" />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/saisaran-jayaraman/" sx={{ mx: 0.5 }}>
                            <LinkedIn fontSize="small" />
                        </IconButton>
                        <IconButton href="https://github.com/J-Saisaran" sx={{ mx: 0.5 }}>
                            <GitHub fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
