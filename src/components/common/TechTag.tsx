import React from 'react';
import { Box } from '@mui/material';

interface TechTagProps {
  label: string;
}

const TechTag: React.FC<TechTagProps> = ({ label }) => {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        color: '#7A7890',
        background: '#1A1A24',
        padding: '3px 10px',
        borderRadius: '3px',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Box>
  );
};

export default TechTag;
