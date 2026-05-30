import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const stats = [
  { num: '5',   label: 'Projects' },
  { num: '3+',  label: 'Yrs Experience' },
  { num: '2',   label: 'Companies' },
  { num: 'MSc', label: 'Degree' },
];

export default function Stats() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(123,92,245,0.18)',
        border: '1px solid rgba(123,92,245,0.18)',
        borderRadius: '8px',
        mb: '5rem',
        overflow: 'hidden',
        animation: `${fadeUp} 0.6s 0.1s ease both`,
      }}
    >
      {stats.map((s) => (
        <Box
          key={s.label}
          sx={{
            background: '#111118',
            padding: '1.5rem 1.2rem',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '2rem',
              fontWeight: 800,
              color: '#7B5CF5',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {s.num}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: '#7A7890',
              mt: '4px',
              letterSpacing: '0.05em',
            }}
          >
            {s.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
