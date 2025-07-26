import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/challengeOne/screens/home/HomeScreen';
import ChallengeOneScreen from '../pages/challengeOne/screens/challengeOne/ChallengeOneScreen';
import ChallengeTwoScreen from '../pages/challengeTwo/screens/challengeTwo/ChallengeTwoScreen';
import ChallengeThreeScreen from '../pages/challengeThree/screens/challengeThree/ChallengeThreeScreen';

export type RootStackParamList = {
  Home: undefined;
  ChallengeOne: undefined;
  ChallengeTwo: undefined;
  ChallengeThree: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Collabera Assessment' }}
        />
        <Stack.Screen 
          name="ChallengeOne" 
          component={ChallengeOneScreen} 
          options={{ title: 'Challenge 1 - Calculator' }}
        />
        <Stack.Screen 
          name="ChallengeTwo" 
          component={ChallengeTwoScreen} 
          options={{ title: 'Challenge 2 - Navbar' }}
        />
        <Stack.Screen 
          name="ChallengeThree" 
          component={ChallengeThreeScreen} 
          options={{ title: 'Challenge 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 