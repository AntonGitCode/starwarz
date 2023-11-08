import styled from 'styled-components';

export const Container = styled.div` 
  width: 40%;
  // display: inline-block;
  // position: relative;
  // transition: all 0.3s ease-in;
  border-radius: 0.5rem;
  // z-index: 2;

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
    // color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    // position: absolute;
    // top: 1rem;
    // right: 1rem;

    border: none;
    background: transparent;
    // z-index: 9;

    svg {
      color: ${({ theme }) => theme.colors.warning.main};
      // color: darkorange;
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
      a {
        position: relative;

        // &::after {
        //   content: "";
        //   position: absolute;
        //   bottom: -2px;
        //   left: 0;
        //   width: 100%;
        //   height: 4px;
        //   background-color: orange;
        // }
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
    display: flex;
    // position: absolute;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    a {
      background-color: none;
      color: ${({ theme }) => theme.colors.dark[900]}
      height: 3rem;
      width: 100%;
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: black;
      }
    }
  }
`;
