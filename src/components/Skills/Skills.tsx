import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import SectionHeader from '../common/SectionHeader';
import { skills } from '../../data/portfolioData';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// Devicons CDN — exact official brand SVG logos
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

interface SkillDef {
  src: string;    // img src (CDN or inline SVG data URI)
  hoverColor: string;
}

const skillIconMap: Record<string, SkillDef> = {
  'HTML5': {
    src: `${CDN}/html5/html5-original.svg`,
    hoverColor: '#E34F26',
  },
  'CSS3': {
    src: `${CDN}/css3/css3-original.svg`,
    hoverColor: '#1572B6',
  },
  'JavaScript': {
    src: `${CDN}/javascript/javascript-original.svg`,
    hoverColor: '#F7DF1E',
  },
  'TypeScript': {
    src: `${CDN}/typescript/typescript-original.svg`,
    hoverColor: '#3178C6',
  },
  'React': {
    src: `${CDN}/react/react-original.svg`,
    hoverColor: '#61DAFB',
  },
  'Angular': {
    src: `${CDN}/angular/angular-original.svg`,
    hoverColor: '#DD0031',
  },
  'Node.js': {
    src: `${CDN}/nodejs/nodejs-original.svg`,
    hoverColor: '#539E43',
  },
  'SQL / MySQL': {
    src: `${CDN}/mysql/mysql-original.svg`,
    hoverColor: '#4479A1',
  },
  'REST APIs': {
    src: `${CDN}/networkx/networkx-original.svg`,
    hoverColor: '#FF6C37',
  },
  'SSR': {
    src: `${CDN}/angular/angular-original.svg`,
    hoverColor: '#00E5C3',
  },
  'Flexbox & Grid': {
    src: `${CDN}/css3/css3-original.svg`,
    hoverColor: '#1572B6',
  },
  'SEO & Structured Data': {
    src: `${CDN}/google/google-original.svg`,
    hoverColor: '#4285F4',
  },
  'Google Charts': {
    src: `${CDN}/google/google-original.svg`,
    hoverColor: '#E37400',
  },
  'TinyMCE': {
    src: `${CDN}/javascript/javascript-original.svg`,
    hoverColor: '#00C3E3',
  },
  'RabbitMQ': {
    src: `${CDN}/rabbitmq/rabbitmq-original.svg`,
    hoverColor: '#FF6600',
  },
  'Docker': {
    src: `${CDN}/docker/docker-original.svg`,
    hoverColor: '#2496ED',
  },
  'RBAC': {
    src: `${CDN}/nodejs/nodejs-original.svg`,
    hoverColor: '#7B5CF5',
  },
  'Angular Route Guards': {
    src: `${CDN}/angular/angular-original.svg`,
    hoverColor: '#DD0031',
  },
};

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: '4rem', md: '5rem' },
        mb: '2rem',
        animation: `${fadeUp} 0.6s 0.15s ease both`,
      }}
    >
      <SectionHeader title="Tech Stack" />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '12px',
        }}
      >
        {skills.map((skill) => {
          const def = skillIconMap[skill.name];
          return (
            <Box
              key={skill.name}
              sx={{
                background: '#111118',
                border: '1px solid rgba(123,92,245,0.18)',
                borderRadius: '8px',
                padding: '14px 16px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: def?.hoverColor ?? '#7B5CF5',
                  transform: 'translateY(-2px)',
                  background: 'rgba(123,92,245,0.04)',
                },
                '&:hover img': {
                  transform: 'scale(1.15)',
                  filter: 'brightness(1.1)',
                },
              }}
            >
              {/* Icon image */}
              <Box
                sx={{
                  width: '28px',
                  height: '28px',
                  mx: 'auto',
                  mb: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={def?.src}
                  alt={skill.name}
                  sx={{
                    width: '26px',
                    height: '26px',
                    objectFit: 'contain',
                    transition: 'transform 0.2s ease, filter 0.2s ease',
                    filter: 'grayscale(20%)',
                  }}
                />
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  color: '#7A7890',
                  letterSpacing: '0.04em',
                  lineHeight: 1.3,
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}