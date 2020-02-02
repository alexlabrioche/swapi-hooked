import React from 'react';
import { Image, Box, Heading, Flex } from 'rebass';
import Loader from '../components/core/Loader';
import BackButton from '../components/BackButton';

function DetailPresenter({ data, loaded }) {
  return (
    <Box>
      <BackButton />
      <Flex justifyContent="center" alignItems="center">
        {loaded ? (
          <Box>
            <Heading>{data.title ? data.title : data.name}</Heading>
            <Image src={data.img_src} />
          </Box>
        ) : (
          <Loader />
        )}
      </Flex>
    </Box>
  );
}

export default DetailPresenter;
