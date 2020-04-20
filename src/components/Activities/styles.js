import styled from "styled-components/native";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  /* margin-top: 25px; */
  padding: 0 16px;
`;

export const Header = styled.View`
  height: 50px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Card = styled.View`
  background-color: #1e222b;
  border-radius: 8px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  height: 13px;
  width: 2px;
  margin: 0 10px;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const LockIcon = styled(Feather).attrs({
  name: "lock",
  size: 14,
  color: "rgba(255, 255, 255, 0.4)",
})``;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
`;

export const CommentIcon = styled(MaterialCommunityIcons).attrs({
  name: "comment-outline",
  size: 14,
  color: "#fff",
})``;

export const HeartIcon = styled(AntDesign).attrs({
  name: "hearto",
  size: 14,
  color: "#fff",
})``;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 5px;
`;
