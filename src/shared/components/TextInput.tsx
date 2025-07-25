import React from 'react';
import { TextInput as RNTextInput, TextInputProps, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface CustomTextInputProps extends TextInputProps {
  error?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ 
  style, 
  error = false, 
  ...props 
}) => {
  return (
    <RNTextInput
      style={[
        styles.input,
        error && styles.inputError,
        style
      ]}
      placeholderTextColor="#999"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: colors.text,
    minHeight: 48,
  },
  inputError: {
    borderColor: '#dc3545',
    backgroundColor: '#fff5f5',
  },
});

export default CustomTextInput; 