import React from 'react';
import { Button, Text } from 'rebass';

function AppButton({ children, big = false, disabled, ...props }) {
  return (
    <Button
      {...props}
      style={{ cursor: disabled ? '' : 'pointer', visibility: disabled ? 'hidden' : 'visible' }}
    >
      <Text fontSize={!big ? [1, 2] : [3, 4]}>{children}</Text>
    </Button>
  );
}

export default AppButton;
