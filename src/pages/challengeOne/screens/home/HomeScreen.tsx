import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/AppNavigator';
import Button from '../../../../shared/components/Button';
import { colors } from '../../../../shared/theme/colors';
import { fonts, fontWeights } from '../../../../shared/theme/fonts';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Collabera Assessment</Text>
        <Text style={styles.subtitle}>Select a challenge to begin:</Text>
        <Button
          title="Challenge 1 - Calculator"
          onPress={() => navigation.navigate('ChallengeOne')}
        />
        <Button
          title="Challenge 2 - Navbar"
          onPress={() => navigation.navigate('ChallengeTwo')}
        />
        <Button
          title="Challenge 3"
          onPress={() => navigation.navigate('ChallengeThree')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: fontWeights.bold as any,
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginBottom: 10,
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: fontWeights.regular as any,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginBottom: 40,
    color: colors.subtitle,
  },
});

export default HomeScreen; 