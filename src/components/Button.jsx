import React from 'react';
import { Button, Text } from 'rebass';
import Link from './core/Link';

function AppButton({ children, to = '/', big = false, ...props }) {
  return (
    <Button {...props}>
      <Link to={to}>
        <Text fontSize={!big ? [1, 2] : [3, 4]}>{children}</Text>
      </Link>
    </Button>
  );
}

export default AppButton;
