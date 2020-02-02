import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Link from './core/Link';
import { dataSource } from '../router/Router';
import BulbIcon from './BulbIcon';

function Appbar() {
  return (
    <Flex px={2} py={[2, 3]} alignItems={'center'} flexDirection={['column', 'column', 'row']}>
      <Text p={2} fontSize={[3, 4]} fontWeight="bold">
        <Link variant="invert-nav" to="/">
          Swapizz
        </Link>
      </Text>
      <Box mx="auto" />
      {dataSource.map(({ LOCATION, NAME }) => {
        if (LOCATION === '/') return null;
        return (
          <Link variant="nav" to={`/${LOCATION}/1`}>
            {NAME}
          </Link>
        );
      })}
      <BulbIcon />
    </Flex>
  );
}

export default Appbar;
