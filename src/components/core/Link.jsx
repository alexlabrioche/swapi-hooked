import React from 'react';
import { Link } from 'react-router-dom';
import { Link as StyledLink } from 'rebass';

function AppLink({ children, to, ...props }) {
  return (
    <StyledLink {...props}>
      <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </Link>
    </StyledLink>
  );
}

export default AppLink;
