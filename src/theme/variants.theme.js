export default {
  nav: {
    p: 2,
    fontWeight: 700,
    '&:hover': {
      color: 'accent',
    },
    '&:active': {
      textDecoration: 'underline',
    },
  },
  'invert-nav': {
    p: 2,
    fontWeight: 700,
    color: 'primary',
    '&:hover': {
      color: 'baseFont',
      textDecoration: 'underline',
    },
    '&:active': {
      textDecoration: 'underline',
    },
  },
  card: {
    backgroundColor: 'shade',
    borderRadius: '10px',
    p: ['5px', 10],
    boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    cursor: 'pointer',
    transition: 'all 150ms ease',
    '&:hover': {
      boxShadow: '8px 8px 12px rgba(0, 0, 0, .25)',
    },
  },
};
