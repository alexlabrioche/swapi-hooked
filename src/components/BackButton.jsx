import React from 'react';
import { useHistory } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { Box } from 'rebass';

function BackButton() {
  let { goBack } = useHistory();
  return (
    <Box fontSize={[45, 60]} onClick={() => goBack()} style={{ cursor: 'pointer' }}>
      <IoIosArrowBack />
    </Box>
  );
}

export default BackButton;
