import { StyleSheet } from 'react-native';
import { colors } from '../../../../shared/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.subtitle,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  clearButton: {
    backgroundColor: '#6c757d',
  },
  clearButtonText: {
    color: '#fff',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
  },
}); 