import React, { useEffect, useState } from 'react';
import useUrl from '../hooks/useUrl';
import useApiRequest from '../hooks/useApi';
import { addMoreInfos } from '../utils/addMoreInfos';
import DetailPresenter from '../pages/Detail';

const SWAPI_ROOT_URL = 'https://swapi.co/api';

function DetailsPageController() {
  const [, { type, id }] = useUrl('type_slug_id');
  const [{ status, response }, makeRequest] = useApiRequest();
  const [detail, setDetail] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    makeRequest(`${SWAPI_ROOT_URL}/${type}/${id}`);
  }, []);

  useEffect(() => {
    if (status === 'SUCCESS') {
      setDetail(...addMoreInfos([response.data], type));
      setIsLoaded(true);
    }
  }, [status, response, type]);

  console.info('detail', detail);
  return <DetailPresenter data={detail} loaded={isLoaded} />;
}

export default DetailsPageController;
