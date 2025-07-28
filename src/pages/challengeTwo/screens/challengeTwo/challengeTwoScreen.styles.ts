import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  featureList: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  featureItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    textAlign: 'left',
  },
  searchResult: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
}); 