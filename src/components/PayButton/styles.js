import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export const Button = styled.TouchableWithoutFeedback``;

export const Gradient = styled(LinearGradient).attrs(({ focused }) => ({
  colors: focused ? ["#fff", "#ccc"] : ["#00fc6c", "#00ac4a"],
  start: [1, 0.2],
}))`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ focused }) => ({
  name: "attach-money",
  size: 30,
  color: focused ? "#000" : "#fff",
}))``;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ focused }) => (focused ? "#000" : "#fff")};
`;
