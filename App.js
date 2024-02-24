import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Dashboard from './components/Dashboard';
import About from './components/About';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation }) => ({
            title: 'ပြည်သူ့နီတိ',
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('About')}>
                <MaterialIcons name="info" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
