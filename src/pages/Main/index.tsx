import React from "react";
import { Container } from "../../styles/components";
import { ContainerContent } from "./styles";

import logo from '../../assets/logo.svg';

export default function Main() {
  return (
    <Container>
      <ContainerContent>
          <header>
          <img src={ logo } alt=""/>
          <button>Jogar</button>
          </header>

      </ContainerContent>
    </Container>
  );
}
