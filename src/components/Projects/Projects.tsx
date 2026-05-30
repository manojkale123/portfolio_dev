import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import SectionHeader from '../common/SectionHeader';
import TechTag from '../common/TechTag';
import { projects } from '../../data/portfolioData';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const categoryMap: Record<string, string> = {
  managegrid: 'Appliance Management · 2025',
  timhortons: 'SSR · 2023',
  jaspur: 'Dashboard · 2023',
  erp: 'Full-Stack · 2023',
  responsive: 'Web · 2023',
};

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: '4rem', md: '5rem' },
        animation: `${fadeUp} 0.6s 0.25s ease both`,
      }}
    >
      <SectionHeader title="Featured Work" />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: '20px',
        }}
      >
        {projects.map((project) => (
          <Box
            key={project.id}
            sx={{
              background: '#111118',
              border: '1px solid rgba(123,92,245,0.18)',
              borderRadius: '12px',
              padding: '1.8rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #7B5CF5, #00E5C3)',
                opacity: 0,
                transition: 'opacity 0.25s ease',
              },
              '&:hover': {
                borderColor: 'rgba(123,92,245,0.4)',
                transform: 'translateY(-3px)',
              },
              '&:hover::before': {
                opacity: 1,
              },
              '&:hover .proj-arrow': {
                color: '#7B5CF5',
              },
            }}
          >
            {/* Arrow */}
            <Typography
              className="proj-arrow"
              sx={{
                position: 'absolute',
                top: '1.8rem',
                right: '1.8rem',
                color: '#7A7890',
                fontSize: '18px',
                transition: 'color 0.2s',
              }}
            >
              ↗
            </Typography>

            {/* Category tag */}
            <Box
              sx={{
                display: 'inline-block',
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                color: '#00E5C3',
                background: 'rgba(0,229,195,0.08)',
                border: '1px solid rgba(0,229,195,0.15)',
                padding: '3px 10px',
                borderRadius: '2px',
                letterSpacing: '0.06em',
                mb: '1rem',
              }}
            >
              {categoryMap[project.id] ?? project.number}
            </Box>

            {/* Name */}
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '17px',
                fontWeight: 700,
                color: '#F0EEF8',
                mb: '0.6rem',
                letterSpacing: '-0.01em',
              }}
            >
              {project.name}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '13px',
                color: '#7A7890',
                lineHeight: 1.7,
                mb: '1.2rem',
              }}
            >
              {project.description}
            </Typography>

            {/* Stack */}
            <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.stack.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
