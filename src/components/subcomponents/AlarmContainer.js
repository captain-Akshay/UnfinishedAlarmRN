import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export const AlarmContainer = ({ item }) => {
  const { isOn, AlarmName, AlarmTime } = item;

  const getTimeString = (date) => {
    const time = new Date(date);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  //   console.log(getTimeString(AlarmTime));
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.timeText}>{getTimeString(AlarmTime)}</Text>
        <Text style={styles.timeText}>{AlarmName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Switch value={isOn} onValueChange={(value) => console.log(value)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: "25%",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 24,
  },
});
