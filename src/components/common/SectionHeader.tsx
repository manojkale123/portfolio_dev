import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        mb: 4,
        '&::before': {
          content: '""',
          display: 'block',
          width: '28px',
          height: '2px',
          background: '#7B5CF5',
          flexShrink: 0,
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          color: '#7B5CF5',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
