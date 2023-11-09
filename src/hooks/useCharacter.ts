import { useCallback, useEffect, useState } from 'react';
import { Character } from '../types/Character.type';

type Film = {
  title: string;
  url: string;
};

export function useCharacter(data: Character | undefined) {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFilms = useCallback(async () => {
    try {
      data?.films.forEach(async (film) => {
        const response = await fetch(film);
        const filmData = await response.json();
        setFilms((prevState) => {
          if (prevState.includes(filmData.title)) return prevState;
          return [
            ...prevState,
            {
              title: filmData.title,
              url: filmData.url,
            },
          ];
        });
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [data?.films]);

 
  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return {
    films,
    isLoading,
  };
}
