import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodForm from './src/FoodForm';
import FoodList from './src/FoodList';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodForm"
          component={FoodForm}
          options={{
            title: 'Home',
            headerTintColor: 'orange',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="FoodList"
          component={FoodList}
          options={{
            headerTintColor: 'orange',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
