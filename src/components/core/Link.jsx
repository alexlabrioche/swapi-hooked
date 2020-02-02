import React from 'react';
import { Link } from 'react-router-dom';
import { Link as StyledLink } from 'rebass';

function AppLink({ children, to, ...otherProps }) {
  return (
    <StyledLink {...otherProps}>
      <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </Link>
    </StyledLink>
  );
}

export default AppLink;
