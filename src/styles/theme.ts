import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    portfolio: {
      accent: string;
      accent2: string;
      surface: string;
      surface2: string;
      border: string;
      muted: string;
      bg: string;
    };
  }
  interface PaletteOptions {
    portfolio?: {
      accent: string;
      accent2: string;
      surface: string;
      surface2: string;
      border: string;
      muted: string;
      bg: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0F',
      paper: '#111118',
    },
    primary: {
      main: '#7B5CF5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00E5C3',
      contrastText: '#0A0A0F',
    },
    text: {
      primary: '#F0EEF8',
      secondary: '#7A7890',
    },
    portfolio: {
      accent: '#7B5CF5',
      accent2: '#00E5C3',
      surface: '#111118',
      surface2: '#1A1A24',
      border: 'rgba(123,92,245,0.18)',
      muted: '#7A7890',
      bg: '#0A0A0F',
    },
  },
  typography: {
    fontFamily: "'Syne', sans-serif",
    h1: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '17px',
    },
    body1: {
      fontFamily: "'Syne', sans-serif",
      fontSize: '15px',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: "'Syne', sans-serif",
      fontSize: '13px',
      lineHeight: 1.7,
    },
    caption: {
      fontFamily: "'Space Mono', monospace",
      fontSize: '11px',
      letterSpacing: '0.08em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: { background: '#0A0A0F', color: '#F0EEF8' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Syne', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'none',
          borderRadius: '4px',
          padding: '13px 28px',
          transition: 'all 0.2s ease',
        },
        contained: {
          background: '#7B5CF5',
          color: '#ffffff',
          '&:hover': { opacity: 0.85, background: '#7B5CF5' },
        },
        outlined: {
          color: '#F0EEF8',
          borderColor: 'rgba(123,92,245,0.18)',
          '&:hover': { borderColor: '#7B5CF5', color: '#7B5CF5', background: 'transparent' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          background: '#1A1A24',
          border: '1px solid rgba(123,92,245,0.18)',
          color: '#7A7890',
          borderRadius: '3px',
          '&:hover': {
            background: 'rgba(123,92,245,0.08)',
            borderColor: '#7B5CF5',
            color: '#7B5CF5',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(123,92,245,0.18)' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10,10,15,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(123,92,245,0.18)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
