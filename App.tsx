import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, View, Text, StatusBar, Platform} from 'react-native';

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

// Home Screen Component
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to DetailsNotWorking"
        onPress={() => navigation.navigate('DetailsNotWorking')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// Details Screen Component
function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Change status bar color for this screen */}
      <StatusBar backgroundColor="#6200ea" barStyle="light-content" />
      <Text>Details Screen</Text>
    </View>
  );
}

// App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DetailsNotWorking"
          component={DetailsScreen}
          options={{
            navigationBarColor: '#D6EDFA',
            ...(Platform.OS === 'android' && {
              statusBarStyle: 'dark',
              statusBarColor: '#D6EDFA',
            }),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            navigationBarColor: '#D6EDFA',
            ...(Platform.OS === 'android' && {
              statusBarStyle: 'dark',
              statusBarBackgroundColor: '#D6EDFA',
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
