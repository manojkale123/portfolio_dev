import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import SectionHeader from '../common/SectionHeader';
import TechTag from '../common/TechTag';
import { experiences } from '../../data/portfolioData';
import type { SubRole } from '../../types';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const SubRoleBlock = ({ subRole, isLast }: { subRole: SubRole; isLast: boolean }) => {
  // Extract the role title (after the " — " separator if present)
  const displayTitle = subRole.title.includes(' — ')
    ? subRole.title.split(' — ')[1]
    : subRole.title;
  const projectName = subRole.title.includes(' — ')
    ? subRole.title.split(' — ')[0]
    : '';

  return (
    <Box sx={{ mb: isLast ? 0 : '1.5rem' }}>
      {projectName && (
        <Typography
          sx={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            color: '#00E5C3',
            letterSpacing: '0.08em',
            mb: '2px',
          }}
        >
          ▸ {projectName}
        </Typography>
      )}
      <Typography
        sx={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          color: '#F0EEF8',
          mb: '6px',
        }}
      >
        {displayTitle}
      </Typography>

      {/* Tech tags */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: '10px' }}>
        {subRole.technologies.map((tech: string) => (
          <TechTag key={tech} label={tech} />
        ))}
      </Box>

      {/* Bullets */}
      <Box component="ul" sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {subRole.bullets.map((bullet: string, i: number) => (
          <Box
            key={i}
            component="li"
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '13px',
              color: '#7A7890',
              lineHeight: 1.7,
              pl: '16px',
              position: 'relative',
              '&::before': {
                content: '"▸"',
                position: 'absolute',
                left: 0,
                color: '#7B5CF5',
                fontSize: '10px',
                top: '4px',
              },
            }}
          >
            {bullet}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: '4rem', md: '5rem' },
        animation: `${fadeUp} 0.6s 0.2s ease both`,
      }}
    >
      <SectionHeader title="Experience" />

      {experiences.map((exp) => (
        <Box
          key={exp.id}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '140px 1fr' },
            gap: { xs: '0.5rem', md: '2rem' },
            py: '1.5rem',
            borderBottom: '1px solid rgba(123,92,245,0.18)',
            '&:last-child': { borderBottom: 'none' },
          }}
        >
          {/* Year column */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: '#7A7890',
                pt: '3px',
                letterSpacing: '0.04em',
              }}
            >
              {exp.period}
            </Typography>
          </Box>

          {/* Content column */}
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
              {exp.role}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: '#7B5CF5',
                mb: '1rem',
              }}
            >
              ▸ {exp.company} · {exp.location}
            </Typography>

            {/* Sub-roles */}
            {exp.subRoles?.map((sr, i) => (
              <SubRoleBlock
                key={sr.title}
                subRole={sr}
                isLast={i === (exp.subRoles?.length ?? 0) - 1}
              />
            ))}

            {/* Simple role */}
            {exp.technologies && !exp.subRoles && (
              <>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: '10px' }}>
                  {exp.technologies.map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {exp.bullets?.map((bullet, i) => (
                    <Box
                      key={i}
                      component="li"
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '13px',
                        color: '#7A7890',
                        lineHeight: 1.7,
                        pl: '16px',
                        position: 'relative',
                        '&::before': {
                          content: '"▸"',
                          position: 'absolute',
                          left: 0,
                          color: '#7B5CF5',
                          fontSize: '10px',
                          top: '4px',
                        },
                      }}
                    >
                      {bullet}
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}