import React from 'react';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';
import Grid from '../components/core/Grid';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from '../components/core/Link';
import { Box } from 'rebass';

function CardListPresenter({
  cards,
  loaded,
  location,
  handlePagination,
  isNext,
  isPrev,
  pageNumber,
}) {
  return (
    <Box>
      <Grid>
        {cards.map((card) => (
          <Card loaded={loaded} data={card} link={`/${location}_${card.slug}_${card.id}`} />
        ))}
      </Grid>
      <Box my={30} sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button big disabled={!isPrev} onClick={isPrev && (() => handlePagination('PREV'))}>
          <Link to={`/${location}/${pageNumber - 1}`}>
            <IoMdArrowRoundBack />
          </Link>
        </Button>
        <Button big disabled={!isNext} onClick={isNext && (() => handlePagination('NEXT'))}>
          <Link to={`/${location}/${pageNumber + 1}`}>
            <IoMdArrowRoundForward />
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default CardListPresenter;
