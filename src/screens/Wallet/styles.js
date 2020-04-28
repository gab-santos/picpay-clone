import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

export const Wrapper = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Header = styled(LinearGradient).attrs(({ backgroundColors }) => ({
  colors: backgroundColors,
}))`
  height: 300px;
  padding-top: ${Constants.statusBarHeight}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const EyeIcon = styled(Feather).attrs(() => ({
  size: 28,
  color: "#fff",
}))``;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const CashIcon = styled(MaterialCommunityIcons).attrs({
  name: "cash",
  size: 28,
  color: "#fff",
})``;

export const BankIcon = styled(FontAwesome).attrs({
  name: "bank",
  size: 20,
  color: "#fff",
})``;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background-color: #1c1c1e;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const Switch = styled.Switch``;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;

export const Img = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddIcon = styled(AntDesign).attrs({
  name: "pluscircleo",
  size: 30,
  color: "#0db060",
})`
  margin-right: 10px;
`;

export const AddLabel = styled.Text`
  font-size: 18px;
  color: #0db060;
  font-weight: bold;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TicketIcon = styled(MaterialCommunityIcons).attrs({
  name: "ticket-outline",
  size: 20,
  color: "#0db060",
})`
  margin-right: 10px;
`;

export const UseTicketLabel = styled.Text`
  font-size: 16px;
  color: #0db060;
  font-weight: bold;
  text-decoration-line: underline;
`;
