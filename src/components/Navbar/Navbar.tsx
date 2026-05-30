import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Button } from '@mui/material';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { label: 'Work',       href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: scrolled
          ? 'rgba(10,10,15,0.97)'
          : 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(123,92,245,0.18)',
        transition: 'background 0.3s',
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
          minHeight: '60px !important',
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '14px',
            color: '#7B5CF5',
            letterSpacing: '0.08em',
            userSelect: 'none',
          }}
        >
          {'{ '}
          {personalInfo.nameFirst.toLowerCase()}
          {'.dev }'}
        </Typography>

        {/* Nav Links */}
        <Box
          component="nav"
          sx={{ display: { xs: 'none', md: 'flex' }, gap: '2rem' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              underline="none"
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                color: '#7A7890',
                letterSpacing: '0.06em',
                transition: 'color 0.2s',
                '&:hover': { color: '#F0EEF8' },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>

       
      </Toolbar>
    </AppBar>
  );
}
