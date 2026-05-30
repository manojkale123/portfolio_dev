import React from 'react';
import { Box, Typography } from '@mui/material';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(123,92,245,0.18)',
        py: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        mb: '1rem',
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px',
          color: '#7A7890',
        }}
      >
        © {new Date().getFullYear()} {personalInfo.name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px',
          color: '#7A7890',
        }}
      >
        Designed & built with{' '}
        <Box component="span" sx={{ color: '#7B5CF5' }}>
          ♥
        </Box>
      </Typography>
    </Box>
  );
}
