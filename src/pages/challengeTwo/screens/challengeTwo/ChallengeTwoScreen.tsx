import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { styles } from './challengeTwoScreen.styles';
import { ChallengeTwoScreenProps } from './challengeTwoScreen.types';
import { Navbar } from '../../components';

const ChallengeTwoScreen: React.FC<ChallengeTwoScreenProps> = () => {
  const [searchText, setSearchText] = useState('');

  const handleNavLinkPress = (link: string) => {
    Alert.alert('Navigation', `Navigating to: ${link}`);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    console.log('Search text:', text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar 
        title="AEON" 
        navigationLinks={['Showcase', 'Docs', 'Blog', 'Analytics', 'Templates', 'Enterprise']}
        searchPlaceholder="Search documentation..."
        onNavLinkPress={handleNavLinkPress}
        onSearchChange={handleSearchChange}
        showSearch={true}
        brandColor="#2563eb"
        backgroundColor="#fff"
        textColor="#333"
      />
      <View style={styles.content}>
        <Text style={styles.text}>Challenge 2 - Reusable Navbar Implementation</Text>
        <Text style={styles.subtitle}>
          This page demonstrates a reusable navbar component with customizable props:
        </Text>
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>• Customizable navigation links</Text>
          <Text style={styles.featureItem}>• Configurable search functionality</Text>
          <Text style={styles.featureItem}>• Customizable colors and styling</Text>
          <Text style={styles.featureItem}>• Responsive design (desktop/mobile)</Text>
          <Text style={styles.featureItem}>• Event handlers for navigation and search</Text>
        </View>
        {searchText ? (
          <Text style={styles.searchResult}>Searching for: "{searchText}"</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ChallengeTwoScreen; 