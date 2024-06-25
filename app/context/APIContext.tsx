'use client';

import React, { createContext, useEffect } from 'react';
import useSWR from 'swr';
import { apiUrl, fetcher, postFetcher, fetchTokenAndReturn } from '../constants';
import { Property, APIContextProviderProps } from '@/app/types';

interface APIContextValue {
  properties: Property[] | undefined;
  error: Error | null;
  token: string | undefined;
}

const APIContext = createContext<APIContextValue>({
  token: '',
  properties: [],
  error: null,
});

export function APIContextProvider({ children }: APIContextProviderProps) {
  const { data: properties, error: propertiesError } = useSWR<Property[]>(
    `${apiUrl}/api/upcoming-projects`,
    fetcher,
  );

  const { data: token, error: tokenError } = useSWR<string>(
    `${apiUrl}/api/token`,
    fetcher,
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const csrfToken = await fetchTokenAndReturn();
  //       const payload = JSON.stringify({
  //         "page_id" : 1,
  //         "_token" : csrfToken
  //       });
  //       const url = `${apiUrl}/api/cms-pages?page_id=1`;

  //       const responseData = await postFetcher(url, payload);

  //       console.log('Response Data:', responseData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const error = propertiesError || tokenError;

  return (
    <APIContext.Provider value={{ token, properties, error }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = React.useContext(APIContext);
  if (!context) {
    throw new Error('useAPI must be used within an APIContextProvider');
  }
  return context;
}
