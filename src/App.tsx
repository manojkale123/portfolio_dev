import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box } from '@mui/material';
import theme from './styles/theme';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/common/Stats';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Background decorations */}
      <div className="noise-overlay" />
      <div className="glow-primary" />
      <div className="glow-secondary" />



      {/* Sticky navbar sits outside the content max-width container */}
      <Navbar />

      {/* Main content container */}
      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
        }}
      >
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
