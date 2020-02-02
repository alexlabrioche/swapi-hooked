import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardListController from '../controllers/CardList.controller';
import DetailsPageController from '../controllers/DetailsPage.controller';
import {
  HomePage,
  PeoplePage,
  SpeciePage,
  StarshipPage,
  FilmPage,
  VehiclePage,
  PlanetPage,
} from '../pages';
import AppLayout from '../layouts/AppLayout';

export const HOME_URI = '/';
export const FILMS_URI = '/films';
export const PEOPLE_URI = '/personnages';
export const STARSHIPS_URI = '/vaisseaux';
export const SPECIES_URI = '/especes';
export const VEHICLES_URI = '/vehicules';
export const PLANETS_URI = '/planetes';

export function getApiEndpoint(location) {
  switch (location) {
    case FILMS_URI:
      return '/films';
    case PEOPLE_URI:
      return '/people';
    case PLANETS_URI:
      return '/planets';
    case SPECIES_URI:
      return '/species';
    case VEHICLES_URI:
      return '/vehicles';
    case STARSHIPS_URI:
      return '/starships';
    default:
      return '/';
  }
}

export const dataSource = [
  {
    LOCATION: HOME_URI,
    NAME: 'Accueil',
  },
  {
    LOCATION: FILMS_URI,
    NAME: 'Films',
  },
  {
    LOCATION: PEOPLE_URI,
    NAME: 'Personnages',
  },
  {
    LOCATION: STARSHIPS_URI,
    NAME: 'Vaisseaux',
  },
  {
    LOCATION: SPECIES_URI,
    NAME: 'Espèces',
  },
  {
    LOCATION: VEHICLES_URI,
    NAME: 'Véhicules',
  },
  {
    LOCATION: PLANETS_URI,
    NAME: 'Planètes',
  },
];

export const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function AppRouter() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          {dataSource.map(({ LOCATION }) => {
            return LOCATION === '/' ? (
              <Route path={LOCATION} exact component={HomePage} />
            ) : (
              <Route exact path={LOCATION} component={CardListController} />
            );
          })}

          <Route path={`${FILMS_URI}/:id`} component={DetailsPageController} />
          <Route path={`${PEOPLE_URI}/:id`} component={PeoplePage} />
          <Route path={`${STARSHIPS_URI}/:id`} component={StarshipPage} />
          <Route path={`${SPECIES_URI}/:id`} component={SpeciePage} />
          <Route path={`${VEHICLES_URI}/:id`} component={VehiclePage} />
          <Route path={`${PLANETS_URI}/:id`} component={PlanetPage} />

          <Route component={() => <p>404</p>} />
        </Switch>

        {/* <LocationDisplay /> */}
      </AppLayout>
    </Router>
  );
}

export default AppRouter;
