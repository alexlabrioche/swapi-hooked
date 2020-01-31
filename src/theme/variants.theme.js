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
    p: [10, 20],
    boxShadow: '0 4px 8px rgba(0, 0, 0, .125)',
    cursor: 'pointer',
  },
};
