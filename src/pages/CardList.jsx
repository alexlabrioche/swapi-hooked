import React from 'react';

import Grid from '../components/core/Grid';
import Card from '../components/Card';

function CardListPresenter({ cards, loaded, location }) {
  return (
    <Grid>
      {cards.map((card) => (
        <Card loaded={loaded} data={card} link={`${location}/${card.slug}`} />
      ))}
    </Grid>
  );
}

export default CardListPresenter;
