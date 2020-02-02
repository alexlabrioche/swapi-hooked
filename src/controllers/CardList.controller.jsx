import React from 'react';
import { useLocation } from 'react-router-dom';

import { addMoreInfos } from '../utils/addMoreInfos';
import useApiRequest from '../hooks/useApi';
import { getApiEndpoint } from '../router/Router';

import CardListPresenter from '../pages/CardList';

const SWAPI_ROOT_URL = 'https://swapi.co/api';

const DEFAULT_LIST_PLACEHOLDER = Array.from(Array(10), (_, i) => i + 1);

function CardList() {
  const { pathname } = useLocation();
  const [appLocation, setAppLocation] = React.useState(null);
  const [{ status, response }, makeRequest] = useApiRequest();
  const [list, setList] = React.useState(DEFAULT_LIST_PLACEHOLDER);
  const [isLoaded, setIsLoaded] = React.useState(false);

  console.info('useApi', { status, response });
  React.useEffect(() => {
    // console.info('UE handlePageChange');
    if (appLocation !== pathname) {
      setList(DEFAULT_LIST_PLACEHOLDER);
      setAppLocation(pathname);
      makeRequest(SWAPI_ROOT_URL + getApiEndpoint(pathname));
    }
  }, [appLocation, pathname]);

  React.useEffect(() => {
    if (status === 'SUCCESS') {
      setIsLoaded(true);
      const { results } = response.data;
      setList(addMoreInfos(results, pathname));
      return;
    }
    setIsLoaded(false);
    setList(DEFAULT_LIST_PLACEHOLDER);
  }, [status, response]);

  return <CardListPresenter cards={list} loaded={isLoaded} location={appLocation} />;
}

export default CardList;
