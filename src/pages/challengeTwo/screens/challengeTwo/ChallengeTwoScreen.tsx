import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './challengeTwoScreen.styles';
import { ChallengeTwoScreenProps } from './challengeTwoScreen.types';

const ChallengeTwoScreen: React.FC<ChallengeTwoScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Challenge 2 Screen</Text>
    </View>
  );
};

export default ChallengeTwoScreen; 