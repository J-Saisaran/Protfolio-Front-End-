
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalInfo } from '../redux/personalInfoSlice'; // Adjust the path as necessary
import { Container, Typography, Link, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const dispatch = useDispatch();
    const { info, status, error } = useSelector((state) => state.personalInfo);

    // Fetch personal info when Contact Us dialog is opened
    useEffect(() => {
        if (contactOpen && status === 'idle') {
            dispatch(fetchPersonalInfo());
        }
    }, [contactOpen, status, dispatch]);

    return (
        <Box classname="fixed" sx={{backgroundColor: '#333', padding: '20px ' }}>
            <Container maxWidth="lg">
                <Box >
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 'bold', mb: 0.5, paddingRight: '10px' }}>
                            Saisaran J
                        </Typography>
                        
                    </Box>   
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', paddingRight: '10px' }}>
                            © {new Date().getFullYear()} Saisaran J. All rights reserved.
                        </Typography>
                        </Box>            
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Link
                            href="#"
                            onClick={() => setPrivacyOpen(true)}
                            sx={{ mx: 1, fontSize: '0.75rem' }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            onClick={() => setTermsOpen(true)}
                            sx={{ mx: 1, fontSize: '0.75rem' }}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            onClick={() => setContactOpen(true)}
                            sx={{ mx: 1, fontSize: '0.75rem' }}
                        >
                            Contact Us
                        </Link>
                    </Box>

                    {/* Social Links */}
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <IconButton href="https://www.facebook.com/Saisaran1027" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                            <Facebook fontSize="small" />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/saisaran-jayaraman/" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                            <LinkedIn fontSize="small" />
                        </IconButton>
                        <IconButton href="https://github.com/J-Saisaran" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                            <GitHub fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Container>

            {/* Privacy Policy Dialog */}
            <Dialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} PaperProps={{ sx: { backgroundColor: '#000', color: '#fff' } }}>
                <DialogTitle variant="body6">Privacy Policy</DialogTitle>
                <DialogContent>
                    <Typography variant="body3">
                        
                        * At Saisaran J Portfolio (https://saisaran-protfolio-full-stack-develop.netlify.app/), your privacy is important to us. <br />
                        * This policy explains how we collect, use, and protect your information. <br />
                        * We may collect personal data such as your name, email, and project details when you interact with our website. <br />
                        * This information is used to respond to your inquiries and enhance your user experience.<br />
                        * Our website may contain links to third-party websites. <br />
                        * We are not responsible for the privacy practices of these external sites. <br />
                        * We take reasonable measures to secure your data, though no system is entirely secure. <br />
                        * By using our site, you consent to this Privacy Policy.<br />
                        * We may update this policy from time to time. Please check back for any changes.<br />
                        * If you have any questions, please contact us at saisaran027@gmail.com.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setPrivacyOpen(false)} sx={{ color: '#fff' }}>Close</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={termsOpen} onClose={() => setTermsOpen(false)} PaperProps={{ sx: { backgroundColor: '#000', color: '#fff' } }}>
                <DialogTitle variant="body6">Terms of Service</DialogTitle>
                <DialogContent>
                    <Typography variant="body3">
                    
                        * By accessing or using https://saisaran-protfolio-full-stack-develop.netlify.app/, you agree to these Terms of Service.<br />
                        * The website must be used only for lawful purposes. All content on this site, including text, images, and code, is owned by Saisaran J and may not be copied without permission.<br />
                        * Our site may include links to third-party websites, but we are not responsible for their content. <br />
                        * We do not guarantee the accuracy or reliability of the information provided on this website. <br />
                        * We may change these Terms at any time, and continued use of the site implies acceptance of any updates.<br />
                        * For any questions or concerns, contact us at saisaran027@gmail.com.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setTermsOpen(false)} sx={{ color: '#fff' }}>Close</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={contactOpen} onClose={() => setContactOpen(false)} PaperProps={{ sx: { backgroundColor: '#000', color: '#fff' } }}>
                <DialogTitle variant="body6">Contact Us</DialogTitle>
                <DialogContent>
                    {status === 'loading' ? (
                        <Typography variant="body2">Loading...</Typography>
                    ) : status === 'failed' ? (
                        <Typography variant="body2" color="error">Error: {error}</Typography>
                    ) : (
                        info && (
                            <Typography variant="body3">
                                Email: {info.email}<br />
                                Phone: {info.contact.phone}<br />
                                Address: {info.contact.address}
                            </Typography>
                        )
                    )}
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setContactOpen(false)} sx={{ color: '#fff' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Footer;
