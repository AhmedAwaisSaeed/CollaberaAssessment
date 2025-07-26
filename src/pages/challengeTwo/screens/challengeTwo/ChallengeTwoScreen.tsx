import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './challengeTwoScreen.styles';
import { ChallengeTwoScreenProps } from './challengeTwoScreen.types';
import { Navbar } from '../../components';

const ChallengeTwoScreen: React.FC<ChallengeTwoScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="AEON" />
      <View style={styles.content}>
        <Text style={styles.text}>Challenge 2 - Navbar Implementation</Text>
        <Text style={styles.subtitle}>
          This page contains a responsive navbar with desktop and mobile views.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ChallengeTwoScreen; 