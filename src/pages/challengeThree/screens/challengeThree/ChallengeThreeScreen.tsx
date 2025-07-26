import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './challengeThreeScreen.styles';
import { ChallengeThreeScreenProps } from './challengeThreeScreen.types';

// Two-pointer solution for Two Sum II
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      // Return 1-based indices
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

const examples = [
  { numbers: [2, 7, 11, 15], target: 9 },
  { numbers: [2, 3, 4], target: 6 },
  { numbers: [-1, 0], target: -1 },
];

const ChallengeThreeScreen: React.FC<ChallengeThreeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Challenge 3: Two Sum II - Input Array Is Sorted</Text>
      {examples.map((ex, idx) => (
        <View key={idx} style={{ marginVertical: 12 }}>
          <Text style={styles.text}>Example {idx + 1}:</Text>
          <Text style={styles.text}>Input: numbers = [{ex.numbers.join(', ')}], target = {ex.target}</Text>
          <Text style={styles.text}>Output: [{twoSum(ex.numbers, ex.target).join(', ')}]</Text>
        </View>
      ))}
    </View>
  );
};

export default ChallengeThreeScreen; 