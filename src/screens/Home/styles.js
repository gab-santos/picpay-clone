import styled from "styled-components/native";
import Constants from "expo-constants";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QRCodeIcon = styled(MaterialCommunityIcons).attrs({
  name: "qrcode-scan",
  size: 30,
  color: "#10c86e",
})``;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

export const GiftIcon = styled(AntDesign).attrs({
  name: "gift",
  size: 30,
  color: "#10c86e",
})``;
