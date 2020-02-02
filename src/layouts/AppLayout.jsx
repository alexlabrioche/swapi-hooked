import React from 'react';
import { Box } from 'rebass';
import Appbar from '../components/Appbar';

function PageLayout({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: 'background',
        color: 'baseFont',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <Appbar />
      <Box
        sx={{
          maxWidth: '1024px',
          mx: 'auto',
          px: 60,
          py: 30,
          height: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout;
