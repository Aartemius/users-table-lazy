import { useState, useEffect } from 'react';
import { User } from '../types/user';

export interface UsersResponseData {
  info: object;
  results: User[];
}

const useContacts = (initialPage: number) => {
  const [data, setData] = useState<UsersResponseData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
        if (!response.ok) {
          throw new Error('Error occured');
        }

        const result = await response.json();
        setData(prevData => ({
          info: result.info,
          results: [...(prevData?.results || []), ...result.results],
        }));
    
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { data, isLoading, error, loadMore };
}

export default useContacts;
