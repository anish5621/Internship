import { useState, useEffect } from 'react';
import type { ApiResponse, FetchState } from './userTypes'; // Updated import path

export function useFetchResource<T>(fetcher: () => Promise<ApiResponse<T>>) {
  const [state, setState] = useState<FetchState<ApiResponse<T>>>({
    status: 'loading',
    data: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    fetcher()
      .then((res) => {
        if (isMounted) {
          setState({ status: 'success', data: res, error: null });
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setState({ status: 'error', data: null, error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return state;
}

export type UseFetchResourceReturn<T> = ReturnType<typeof useFetchResource<T>>;