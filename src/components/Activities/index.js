import React from "react";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  LockIcon,
  Date,
  Actions,
  Option,
  CommentIcon,
  HeartIcon,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@gabriiels_</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Gabriel Santos</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>
            <Divider />
            <LockIcon />
            <Date>há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <CommentIcon />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <HeartIcon />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
