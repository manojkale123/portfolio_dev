import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import SectionHeader from '../common/SectionHeader';
import { educations } from '../../data/portfolioData';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export default function Education() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: '4rem', md: '5rem' },
        animation: `${fadeUp} 0.6s 0.25s ease both`,
      }}
    >
      <SectionHeader title="Education" />

      {educations.map((edu, idx) => (
        <Box
          key={edu.id}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '140px 1fr' },
            gap: { xs: '0.25rem', md: '2rem' },
            py: '1.5rem',
            borderBottom: idx < educations.length - 1 ? '1px solid rgba(123,92,245,0.18)' : 'none',
          }}
        >
          {/* Degree short label */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                color: '#7A7890',
                pt: '3px',
                letterSpacing: '0.04em',
              }}
            >
              {edu.id === 'msc' ? 'MSc' : 'BSc'}
            </Typography>
          </Box>

          {/* Content */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#F0EEF8',
                mb: '4px',
              }}
            >
              {edu.degree}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: '#7B5CF5',
                mb: '2px',
              }}
            >
              ▸ {edu.university}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                color: '#7A7890',
              }}
            >
              {edu.location}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
