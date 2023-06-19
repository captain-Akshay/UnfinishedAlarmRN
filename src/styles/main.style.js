import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const HeadingStyle = styled.View`
  height: 30%;
  background-color: blue;
`;
export const ListStyle = styled.View`
  flex: 1;
  background-color: white;
`;
export const ButtonStyle = styled(TouchableOpacity)`
  background-color: blue;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  right: 16px;
  bottom: 16px;
  align-items: center;
  justify-content: center;
`;
export const AlarmList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
