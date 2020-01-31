import React, { useContext } from 'react';
import { Text } from 'rebass';
import { AiOutlineBulb, AiTwotoneBulb } from 'react-icons/ai';
import { ThemeCtx } from '../context/ThemeContext';

function BulbIcon() {
  const { isDark, toggleTheme } = useContext(ThemeCtx);
  return (
    <Text style={{ cursor: 'pointer' }} onClick={toggleTheme} color="baseFont" fontSize={[2, 3]}>
      {isDark ? <AiOutlineBulb /> : <AiTwotoneBulb />}
    </Text>
  );
}

export default BulbIcon;
