import React, { useState, createContext } from "react";
export const AlarmContext = createContext();
export const AlarmContextProvider = ({ children }) => {
  const [alarms, setAlarms] = useState([
    { isOn: true, AlarmName: "Test", AlarmTime: new Date() },
  ]);
  const addAlarm = (obj) => {
    setAlarms([...alarms, obj]);
  };
  return (
    <AlarmContext.Provider
      value={{
        alarms,
        addtoAlarmList: addAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};
