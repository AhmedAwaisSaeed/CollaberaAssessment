import React, { useState } from 'react';
import { View, Text, Alert, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './challengeOneScreen.styles';
import { ChallengeOneScreenProps } from './challengeOneScreen.types';
import { Button, TextInput as CustomTextInput } from '../../../../shared/components';

const ChallengeOneScreen: React.FC<ChallengeOneScreenProps> = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculate = () => {
    // Dismiss keyboard when calculate button is pressed
    Keyboard.dismiss();
    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Invalid Input', 'Please enter valid numbers in both fields.');
      return;
    }

    const sum = num1 + num2;
    setTotal(sum);
  };

  const handleClear = () => {
    // Dismiss keyboard when clear button is pressed
    Keyboard.dismiss();
    setFirstNumber('');
    setSecondNumber('');
    setTotal(null);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Calculator</Text>
        <Text style={styles.subtitle}>Add two numbers together</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Number:</Text>
        <CustomTextInput
          value={firstNumber}
          onChangeText={setFirstNumber}
          placeholder="Enter first number"
          keyboardType="numeric"
          maxLength={10}
          returnKeyType="next"
        />

        <Text style={styles.label}>Second Number:</Text>
        <CustomTextInput
          value={secondNumber}
          onChangeText={setSecondNumber}
          placeholder="Enter second number"
          keyboardType="numeric"
          maxLength={10}
          returnKeyType="done"
          onSubmitEditing={handleCalculate}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Calculate Sum" onPress={handleCalculate} />
        <Button 
          title="Clear" 
          onPress={handleClear}
          style={styles.clearButton}
          textStyle={styles.clearButtonText}
        />
      </View>

      {total !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total:</Text>
          <Text style={styles.resultValue}>{total}</Text>
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default ChallengeOneScreen; 