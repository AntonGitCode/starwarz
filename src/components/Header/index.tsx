import React from "react";
import { Link } from "react-router-dom";
import { MdPersonSearch, MdMovie } from "react-icons/md";
import { Container } from "./styles";
import logo from "/images/logo.svg";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo Star Wars" />
      </Link>

      <nav>
        <Link to="/">
          <MdPersonSearch size={20} />
          People
        </Link>

        <Link to="/films">
          <MdMovie size={20} />
          Films
        </Link>
      </nav>
    </Container>
  );
}
