import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardListController from '../controllers/CardList.controller';
import DetailsPageController from '../controllers/DetailsPage.controller';
import HomePage from '../pages/Home';
import AppLayout from '../layouts/AppLayout';

export const HOME = '';
export const FILMS = 'films';
export const PEOPLE = 'people';
export const STARSHIPS = 'starships';
export const SPECIES = 'species';
export const VEHICLES = 'vehicles';
export const PLANETS = 'planets';

export const dataSource = [
  {
    LOCATION: HOME,
    NAME: 'Accueil',
  },
  {
    LOCATION: FILMS,
    NAME: 'Films',
  },
  {
    LOCATION: PEOPLE,
    NAME: 'Personnages',
  },
  {
    LOCATION: STARSHIPS,
    NAME: 'Vaisseaux',
  },
  {
    LOCATION: SPECIES,
    NAME: 'Espèces',
  },
  {
    LOCATION: VEHICLES,
    NAME: 'Véhicules',
  },
  {
    LOCATION: PLANETS,
    NAME: 'Planètes',
  },
];

function AppRouter() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path={`/`} exact component={HomePage} />
          <Route exact path={`/:type/:page`} component={CardListController} />
          <Route path={`/:type_slug_id`} component={DetailsPageController} />
          <Route component={() => <p>404</p>} />
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default AppRouter;
