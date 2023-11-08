import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { FaCarAlt, FaSpaceShuttle } from "react-icons/fa";
// import { MdMovie } from "react-icons/md";
// import { Loading } from "../../components/Loading";
// import { useCharacter } from "../../hooks/useCharacter";
import { api } from "../../services/api";
import { Character } from "../../types/Character.type";
import { getUrlId } from "../../utils/getUrlId";
import { CharacterContainer, Container } from "./styles";

export default function CharacterPage() {
  const [data, setData] = useState<Character>();
  // const {
  //   films,
  //   homeWorld,
  //   starships,
  //   vehicles,
  //   isLoading: isLoadingCharacter,
  // } = useCharacter(data);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`);
      setData(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <Container>
      {isLoading ? (
        <div>Loading a hero...</div>
      ) : (
        <CharacterContainer>
          <div className="character-data">
            <div className="character-data-details">
              <h1>{data?.name}</h1>

              <p>
                Height: <span>{data?.height} cm</span>
              </p>

              <p>
                Mass: <span>{data?.mass} kg</span>
              </p>

              <p>
                Hair color: <span>{data?.hair_color}</span>
              </p>
            </div>
          </div>

          <div className="character-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt={`${data?.name}`}
            />
          </div>
        </CharacterContainer>
      )}
    </Container>
  );
}
