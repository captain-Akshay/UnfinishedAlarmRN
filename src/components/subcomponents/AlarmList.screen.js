import React, { useContext } from "react";
import { ListStyle, AlarmList } from "../../styles/main.style";
import { AlarmContext } from "../../context/alarm.context";
import { AlarmContainer } from "../subcomponents/AlarmContainer";

export const AlaramList = () => {
  const { alarms } = useContext(AlarmContext);
  return (
    <ListStyle>
      <AlarmList data={alarms} renderItem={AlarmContainer}></AlarmList>
    </ListStyle>
  );
};
