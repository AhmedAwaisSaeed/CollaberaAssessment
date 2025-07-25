import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './challengeThreeScreen.styles';
import { ChallengeThreeScreenProps } from './challengeThreeScreen.types';

const ChallengeThreeScreen: React.FC<ChallengeThreeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Challenge 3 Screen</Text>
    </View>
  );
};

export default ChallengeThreeScreen; 