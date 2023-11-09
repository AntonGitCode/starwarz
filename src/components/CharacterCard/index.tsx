import React, { useState } from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setFavouriteCharacter,
  removeFavouriteCharacter,
} from "../../store/slices/Character.slice";
import {
  removeFavoriteFilm,
  setFilmFavourite,
} from "../../store/slices/Film.slice";
import { Container } from "./styles";

interface ICardProps {
  imageUrl: string;
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  id: string;
  type: "characters" | "films";
  isFavourited: boolean;
}

export function Card({
  type,
  name,
  height,
  mass,
  hair_color,
  id,
  isFavourited = false,
}: ICardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavourited);
  const dispatch = useDispatch();

  function handleFavourite() {
    if (isFavourited === false) {
      if (type === "characters") {
        dispatch(setFavouriteCharacter({ name, id, height, mass, hair_color }));
      }

      if (type === "films") {
        dispatch(setFilmFavourite({ title: name, id }));
      }
    } else {
      if (type === "characters") {
        dispatch(removeFavouriteCharacter({ name, id }));
      }

      if (type === "films") {
        dispatch(removeFavoriteFilm({ title: name, id }));
      }
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <Container>
      <div className="card-name">
        <Link to={`/${type}/${id}`}>
          <span className="name">{name}</span> | Height: {height} | Mass: {mass}{" "}
          | Hair: {hair_color}{" "}
        </Link>
        <button type="button" onClick={() => handleFavourite()}>
          {!isFavorite ? <MdStarBorder size={32} /> : <MdStar size={32} />}
        </button>
      </div>
    </Container>
  );
}
