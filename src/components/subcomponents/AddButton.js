import React from "react";
// import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ButtonStyle } from "../../styles/main.style";
export const AddButton = ({ navigation }) => {
  return (
    <ButtonStyle onPress={() => navigation.navigate("AddAlarmScreen")}>
      <AntDesign name="plus" size={24} color="white" />
    </ButtonStyle>
  );
};
