import React from 'react';
import { Box, Flex, Image, Heading } from 'rebass';
import Link from './core/Link';

function AppCard({ data, loaded, link }) {
  const { name, title, img_src } = data;
  console.info('img_src', img_src);
  return (
    <Box variant="card">
      {loaded ? (
        <Link to={link}>
          <Flex>
            <Box
              width={[2 / 5, 2 / 5, 1 / 4]}
              mr={2}
              height={120}
              overflow="hidden"
              alignSelf="center"
            >
              <Image src={img_src} />
            </Box>
            <Heading width={[3 / 5, 3 / 5, 3 / 4]} fontSize={[2, 2, 3]} height={120}>
              <Flex alignItems="center" height="100%">
                {title === undefined ? name : title}
              </Flex>
            </Heading>
          </Flex>
        </Link>
      ) : (
        <Flex>
          <Box width={[2 / 5, 2 / 5, 1 / 4]} mr={2} backgroundColor="shade2" />
          <Box width={[3 / 5, 3 / 5, 3 / 4]} height={120} backgroundColor="shade2" />
        </Flex>
      )}
    </Box>
  );
}

export default AppCard;
