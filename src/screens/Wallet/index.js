import React, { useState } from "react";
import { StatusBar } from "react-native";

import {
  Wrapper,
  Header,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  EyeIcon,
  Info,
  Actions,
  Action,
  CashIcon,
  BankIcon,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  Switch,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddIcon,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  TicketIcon,
  UseTicketLabel,
} from "./styles";

import creditCard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <StatusBar translucent backgroundColor="transparent" />
      <Header
        backgroundColors={
          useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]
        }
      >
        <Title>
          <Bold>Saldo PicPay</Bold>
        </Title>

        <BalanceContainer>
          <Value>
            R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
          </Value>
          <EyeButton onPress={handleToggleVisibility}>
            <EyeIcon name={isVisible ? "eye" : "eye-off"} />
          </EyeButton>
        </BalanceContainer>

        <Info>
          <Bold>Seu saldo está rendendo 100% do CDI</Bold>
        </Info>

        <Actions>
          <Action>
            <CashIcon />
            <ActionLabel>Adicionar</ActionLabel>
          </Action>
          <Action>
            <BankIcon />
            <ActionLabel>Retirar</ActionLabel>
          </Action>
        </Actions>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>

              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} />
          </CardBody>

          <AddButton onPress={() => {}}>
            <AddIcon />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton onPress={() => {}}>
            <TicketIcon />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
