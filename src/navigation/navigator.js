import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlarmScreen} from '../components/alarm.screen';
import {AddAlarmScreen} from '../components/subcomponents/AddAlarmScreen';
import {AlarmContextProvider} from '../context/alarm.context';
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AlarmContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Clock"
            component={AlarmScreen}
            options={params => ({
              ...headerStyles,
              title: 'Alarms',
            })}
          />
          <Stack.Screen name="AddAlarmScreen" component={AddAlarmScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AlarmContextProvider>
  );
};
export const headerStyles = {
  headerStyle: {
    elevation: 0,
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
