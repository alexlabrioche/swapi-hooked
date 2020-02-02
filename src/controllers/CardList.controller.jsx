import React, { useState, useEffect } from 'react';

import { addMoreInfos } from '../utils/addMoreInfos';
import useApiRequest from '../hooks/useApi';
import useUrl from '../hooks/useUrl';

import CardListPresenter from '../pages/List';

const SWAPI_ROOT_URL = 'https://swapi.co/api';
const DEFAULT_LIST = Array.from(Array(10), (_, i) => i + 1);

function CardList() {
  const [appLocation, setAppLocation] = useState(null);
  const [{ status, response }, makeRequest] = useApiRequest();
  const [location, params] = useUrl('page');
  const [list, setList] = useState(DEFAULT_LIST);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  function handlePagination(destination) {
    switch (destination) {
      case 'NEXT':
        makeRequest(nextPage);
        break;
      case 'PREV':
        makeRequest(previousPage);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    // console.info('UE handlePageChange');
    if (appLocation !== location) {
      setList(DEFAULT_LIST);
      setAppLocation(location);
      makeRequest(`${SWAPI_ROOT_URL}/${location}/?page=${params.page}`);
    }
  }, [appLocation, location, makeRequest, params]);

  useEffect(() => {
    if (status === 'SUCCESS') {
      const { results, next, previous } = response.data;
      setIsLoaded(true);
      setNextPage(next);
      setPreviousPage(previous);
      setList(addMoreInfos(results, location));
      return;
    }
    setIsLoaded(false);
    setList(DEFAULT_LIST);
  }, [status, response, location]);

  return (
    <CardListPresenter
      cards={list}
      loaded={isLoaded}
      location={appLocation}
      handlePagination={handlePagination}
      isNext={nextPage ? true : false}
      isPrev={previousPage ? true : false}
      pageNumber={Number(params.page)}
    />
  );
}

export default CardList;
