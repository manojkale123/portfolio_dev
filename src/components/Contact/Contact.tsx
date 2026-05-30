import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import SectionHeader from '../common/SectionHeader';
import { personalInfo, contactLinks } from '../../data/portfolioData';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const socialIcons: Record<string, string> = {
  PHONE: 'PH',
  LINKEDIN: 'LI',
  LOCATION: '📍',
};

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: '4rem', md: '5rem' },
        animation: `${fadeUp} 0.6s 0.3s ease both`,
      }}
    >
      <SectionHeader title="Get In Touch" />

      <Box
        sx={{
          background: '#111118',
          border: '1px solid rgba(123,92,245,0.18)',
          borderRadius: '16px',
          padding: { xs: '2rem', md: '3rem' },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 0%, rgba(123,92,245,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: { xs: '1.8rem', md: '2rem' },
            fontWeight: 800,
            color: '#F0EEF8',
            mb: '0.8rem',
            letterSpacing: '-0.02em',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Let's Build Something
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '15px',
            color: '#7A7890',
            mb: '2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Have a project in mind? I'm always open to exciting opportunities and collaborations.
        </Typography>

        <Button
          component="a"
          href={`tel:${personalInfo.phone}`}
          variant="contained"
          sx={{
            background: '#7B5CF5',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            padding: '13px 28px',
            borderRadius: '4px',
            textTransform: 'none',
            position: 'relative',
            zIndex: 1,
            '&:hover': { opacity: 0.85, background: '#7B5CF5' },
          }}
        >
          {personalInfo.phone} ↗
        </Button>

        {/* Social / Contact links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            mt: '1.5rem',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {contactLinks.map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                border: '1px solid rgba(123,92,245,0.18)',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#7A7890',
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.04em',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#7B5CF5',
                  color: '#7B5CF5',
                },
              }}
            >
              <Box component="span" sx={{ opacity: 0.7 }}>
                {socialIcons[link.label] ?? link.label.slice(0, 2)}
              </Box>
              {link.value}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
