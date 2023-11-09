import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/CharacterCard";
import { InputSearch } from "../../components/InputSearch";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { getUrlId } from "../../utils/getUrlId";
import { Film } from "../../types/Film.types";
import { SelectButton } from "../../components/SelectButton";
import { RootState } from "../../store";
import useDebounce from "../../utils/useDebounce";
import {
  IFilmsFavourite,
  setFilmFavourite,
} from "../../store/slices/Film.slice";
import { FILMS_LS } from "../../utils/constants/localStorageKeys";

export default function Films() {
  const [films, setFilms] = useState<Film[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [isFavouriteSelected, setIsFavouriteSelected] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const filmsFavourite = useSelector((state: RootState) => state.film);
  const debouncedOnChange = useDebounce(inputSearch, 450);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const response = await api.get("films/");
      const returnedData = await response.data;
      setFilms(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`films/?search=${debouncedOnChange}`);
      const returnedData = await response.data;
      setFilms(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [debouncedOnChange]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  useEffect(() => {
    setIsLoading(true);
    getFilteredData();
  }, [getFilteredData]);

  useEffect(() => {
    if (!filmsFavourite.length) {
      const saved = localStorage.getItem(FILMS_LS);
      if (saved) {
        const parsed: IFilmsFavourite[] = JSON.parse(saved);
        parsed.map(({ id, title }: IFilmsFavourite) => {
          dispatch(setFilmFavourite({ id, title }));
        });
      }
    }
  }, []);

  useEffect(() => {
    const serialized = JSON.stringify(filmsFavourite);
    localStorage.setItem(FILMS_LS, serialized);
  }, [filmsFavourite]);

  return (
    <Container>
      <div className="title">
        <h1>Films</h1>
      </div>

      <div className="header">
        {!isFavouriteSelected && (
          <InputSearch
            type="text"
            placeholder="Type something to find any film"
            onChange={(event) => setInputSearch(event.target.value)}
          />
        )}

        <div className="select">
          <SelectButton
            type="button"
            isSelected={isFavouriteSelected === false}
            onClick={() => setIsFavouriteSelected(false)}
          >
            All
          </SelectButton>
          <SelectButton
            isSelected={isFavouriteSelected === true}
            onClick={() => setIsFavouriteSelected(true)}
          >
            Favourites
          </SelectButton>
        </div>
      </div>

      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : !isFavouriteSelected ? (
        <div className="cards">
          {films.map((film) => (
            <Card
              imageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                film.url
              )}.jpg`}
              name={film.title}
              key={film.title}
              id={getUrlId(film.url)}
              type="films"
              isFavourited={filmsFavourite.some(
                (data) => data.title === film.title
              )}
            />
          ))}
        </div>
      ) : filmsFavourite.length > 0 ? (
        <div className="cards">
          {filmsFavourite.map((film) => (
            <Card
              imageUrl={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
              name={film.title}
              key={film.title}
              id={film.id}
              type="films"
              isFavourited
            />
          ))}
        </div>
      ) : (
        <div className="no-favourite">
          <span>No favourite films yet</span>
        </div>
      )}
    </Container>
  );
}
