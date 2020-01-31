import React from 'react';
import { Box } from 'rebass';

function Grid({ children }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: [3, 4, 5],
        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
      }}
    >
      {children}
    </Box>
  );
}

export default Grid;
