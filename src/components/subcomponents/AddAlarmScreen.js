import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Alarm, {
  removeAlarm,
  scheduleAlarm,
  updateAlarm,
} from "../services/alarm";
import TextInput from "../TextInput";
import DayPicker from "../DayPicker";
import TimePicker from "../TimePicker";
import Button from "../Button";
import { globalStyles } from "../../styles/global";
import SwitcherInput from "../SwitcherInput";

export const AddAlarmScreen = ({ route, navigation }) => {
  const [alarm, setAlarm] = useState(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (route.params && route.params.alarm) {
      setAlarm(new Alarm(route.params.alarm));
      setMode("EDIT");
    } else {
      setAlarm(new Alarm());
      setMode("CREATE");
    }
  }, []);

  function update(updates) {
    const a = Object.assign({}, alarm);
    for (let u of updates) {
      a[u[0]] = u[1];
    }
    setAlarm(a);
  }

  async function onSave() {
    if (mode === "EDIT") {
      alarm.active = true;
      await updateAlarm(alarm);
    }
    if (mode === "CREATE") {
      await scheduleAlarm(alarm);
    }
    navigation.goBack();
  }

  async function onDelete() {
    await removeAlarm(alarm.uid);
    navigation.goBack();
  }

  if (!alarm) {
    return <View />;
  }

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.innerContainer, styles.container]}>
        <View styles={styles.inputsContainer}>
          <TimePicker
            onChange={(h, m) =>
              update([
                ["hour", h],
                ["minutes", m],
              ])
            }
            hour={alarm.hour}
            minutes={alarm.minutes}
          />
          <TextInput
            description={"Title"}
            style={styles.textInput}
            onChangeText={(v) => update([["title", v]])}
            value={alarm.title}
          />
          <TextInput
            description={"Description"}
            style={styles.textInput}
            onChangeText={(v) => update([["description", v]])}
            value={alarm.description}
          />
          <SwitcherInput
            description={"Repeat"}
            value={alarm.repeating}
            onChange={(v) => update([["repeating", v]])}
          />
          {alarm.repeating && (
            <DayPicker
              onChange={(v) => update([["days", v]])}
              activeDays={alarm.days}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          {mode === "EDIT" && <Button onPress={onDelete} title={"Delete"} />}
          <Button fill={true} onPress={onSave} title={"Save"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  inputsContainer: {
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
