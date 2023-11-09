import styled from 'styled-components';

export const Container = styled.div` 
  width: 40%;
  border-radius: 0.5rem;

  @media screen and (max-width: 1224px) {
    width: 50%;
  }
  @media screen and (max-width: 800px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  > button {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
   

    border: none;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.colors.warning.main};
      color: darkorange;
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.warning.light};
        // color: darkred;
      }
    }
  }

  &:hover {
    .card-name {
      button {
        background: transparent;
        color: orange;
      }
      a {
        position: relative;
      }
    }
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .name {
    color: orange;
  }

  .card-name {
    button {
      background: transparent;
      color: lightgray;
      border: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    a {
      background-color: none;
      color: ${({ theme }) => theme.colors.dark[900]}
      height: 3rem;
      width: 100%;

      &:hover {
        background-color: black;
      }
    }
  }
`;
