import React from 'react';

import Grid from '../components/core/Grid';
import Card from '../components/Card';

function CardListPresenter({ cards, loaded }) {
  return (
    <Grid>
      {cards.map((card) => (
        <Card loaded={loaded} data={card} />
      ))}
    </Grid>
  );
}

export default CardListPresenter;
