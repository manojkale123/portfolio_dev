import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import { personalInfo } from '../../data/portfolioData';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const codeLines = [
  { num: '01', content: <><span style={{ color: '#7B5CF5' }}>const</span> <span style={{ color: '#00E5C3' }}>developer</span> = {'{'}</> },
  { num: '02', content: <>&nbsp;&nbsp;name: <span style={{ color: '#FF9E7D' }}>"Manoj Kale"</span>,</> },
  { num: '03', content: <>&nbsp;&nbsp;focus: <span style={{ color: '#FF9E7D' }}>"Front-End"</span>,</> },
  { num: '04', content: <>&nbsp;&nbsp;specialty: <span style={{ color: '#FF9E7D' }}>"Angular, React"</span>,</> },
  { num: '05', content: <>&nbsp;&nbsp;stack: [<span style={{ color: '#FF9E7D' }}>"Angular"</span>, <span style={{ color: '#FF9E7D' }}>"Node"</span>,</> },
  { num: '06', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#FF9E7D' }}>"TypeScript"</span>, <span style={{ color: '#FF9E7D' }}>"MySQL"</span>],</> },
  { num: '07', content: <>&nbsp;&nbsp;<span style={{ color: '#00E5C3' }}>passion</span>: <span style={{ color: '#7B5CF5' }}>true</span> ☕</> },
  { num: '08', content: <>{'};'}</> },
  { num: '09', content: <><span style={{ color: '#7A7890' }}>{'// always shipping 🚀'}</span></> },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        py: { xs: '5rem', md: '7rem' },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: '3rem', md: '4rem' },
        alignItems: 'center',
        animation: `${fadeUp} 0.6s ease both`,
      }}
    >
      {/* ── Left: Text ── */}
      <Box>
        {/* Badge */}
        <Box
          sx={{
            display: 'inline-block',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: '#00E5C3',
            background: 'rgba(0,229,195,0.08)',
            border: '1px solid rgba(0,229,195,0.2)',
            padding: '5px 14px',
            borderRadius: '2px',
            letterSpacing: '0.1em',
            mb: '1.5rem',
          }}
        >
          ◉ Available for work
        </Box>

        {/* Heading */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.4rem', md: '3.6rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            mb: '1.5rem',
            color: '#F0EEF8',
          }}
        >
          Building{' '}
          <Box component="span" sx={{ color: '#7B5CF5' }}>
            Digital
          </Box>{' '}
          Experiences That Matter
        </Typography>

        {/* Bio */}
        <Typography
          sx={{
            color: '#7A7890',
            lineHeight: 1.8,
            fontSize: '15px',
            mb: '2.5rem',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 400,
          }}
        >
          {personalInfo.title} — transforming UI/UX concepts into responsive,
          accessible, high-performance web applications. Based in{' '}
          {personalInfo.location}.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={() => handleScroll('projects')}
            sx={{
              background: '#7B5CF5',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
              padding: '13px 28px',
              borderRadius: '4px',
              textTransform: 'none',
              '&:hover': { opacity: 0.85, background: '#7B5CF5' },
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleScroll('contact')}
            sx={{
              color: '#F0EEF8',
              borderColor: 'rgba(123,92,245,0.25)',
              fontSize: '14px',
              fontWeight: 700,
              padding: '13px 28px',
              borderRadius: '4px',
              textTransform: 'none',
              '&:hover': { borderColor: '#7B5CF5', color: '#7B5CF5', background: 'transparent' },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>

      {/* ── Right: Code Card ── */}
      <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
        {/* Floating tags */}
        <Box
          sx={{
            position: 'absolute',
            top: '-16px',
            right: '20px',
            background: '#1A1A24',
            border: '1px solid rgba(0,229,195,0.25)',
            padding: '8px 14px',
            borderRadius: '6px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: '#00E5C3',
            whiteSpace: 'nowrap',
            zIndex: 1,
          }}
        >
          ✦ 3+ yrs experience
        </Box>

        {/* Code card */}
        <Box
          sx={{
            background: '#111118',
            border: '1px solid rgba(123,92,245,0.18)',
            borderRadius: '12px',
            padding: '1.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            lineHeight: 1.9,
          }}
        >
          {/* Window dots */}
          <Box sx={{ display: 'flex', gap: '6px', mb: '1.2rem' }}>
            <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
            <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
          </Box>

          {/* Code lines */}
          {codeLines.map((line) => (
            <Box key={line.num} sx={{ display: 'flex' }}>
              <Box
                component="span"
                sx={{
                  color: 'rgba(123,92,245,0.4)',
                  mr: '1.5rem',
                  userSelect: 'none',
                  minWidth: '20px',
                }}
              >
                {line.num}
              </Box>
              <Box component="span">{line.content}</Box>
            </Box>
          ))}
        </Box>

        {/* Bottom floating tag */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-16px',
            left: '10px',
            background: '#1A1A24',
            border: '1px solid rgba(0,229,195,0.25)',
            padding: '8px 14px',
            borderRadius: '6px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: '#00E5C3',
            whiteSpace: 'nowrap',
            zIndex: 1,
          }}
        >
          ⚡ Open to remote
        </Box>
      </Box>
    </Box>
  );
}
