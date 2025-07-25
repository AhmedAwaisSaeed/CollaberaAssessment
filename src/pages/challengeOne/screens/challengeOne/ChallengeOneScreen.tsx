import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './challengeOneScreen.styles';
import { ChallengeOneScreenProps } from './challengeOneScreen.types';

const ChallengeOneScreen: React.FC<ChallengeOneScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Challenge 1 Screen</Text>
    </View>
  );
};

export default ChallengeOneScreen; 