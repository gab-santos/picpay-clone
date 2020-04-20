import React from "react";
import { Text } from "react-native";

import {
  Wrapper,
  Container,
  Header,
  QRCodeIcon,
  BalanceContainer,
  BalanceTitle,
  Balance,
  GiftIcon,
} from "./styles";

import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <QRCodeIcon />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 10,00</Balance>
          </BalanceContainer>

          <GiftIcon />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
