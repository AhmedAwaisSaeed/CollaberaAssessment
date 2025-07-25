import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = 'AEON' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width));
  const isMobile = width < 768;
  console.log('isMobile', isMobile);

  const navigationLinks = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Templates',
    'Enterprise',
  ];

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu, current state:', isMobileMenuOpen);
    if (isMobileMenuOpen) {
      // Close menu
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsMobileMenuOpen(false));
    } else {
      // Open menu
      setIsMobileMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleNavLinkPress = (link: string) => {
    console.log(`Navigating to: ${link}`);
    // In a real app, this would navigate to the respective page
  };

  return (
    <>
      {/* Desktop Navbar */}
      <View style={styles.desktopNavbar}>
        <Text style={styles.brandTitle}>{title}</Text>
        
        {!isMobile && (
          <View style={styles.navLinks}>
            {navigationLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.navLink}
                onPress={() => handleNavLinkPress(link)}
              >
                <Text style={styles.navLinkText}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {!isMobile && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search documentation..."
              placeholderTextColor="#999"
            />
          </View>
        )}

        {/* Mobile hamburger button */}
        {isMobile && (
          <TouchableOpacity
            style={styles.mobileMenuButton}
            onPress={toggleMobileMenu}
          >
            <View style={styles.hamburgerIcon}>
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <TouchableOpacity
          style={styles.mobileOverlay}
          activeOpacity={1}
          onPress={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Animated.View
          style={[
            styles.mobileMenu,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <View style={styles.mobileMenuHeader}>
            <Text style={styles.mobileBrandTitle}>{title}</Text>
            <View style={styles.mobileMenuIcons}>
              <TouchableOpacity style={styles.mobileIcon}>
                <Text style={styles.iconText}>🔍</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mobileIcon}
                onPress={toggleMobileMenu}
              >
                <Text style={styles.iconText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mobileNavLinks}>
            {navigationLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.mobileNavLink}
                onPress={() => {
                  handleNavLinkPress(link);
                  toggleMobileMenu();
                }}
              >
                <Text style={styles.mobileNavLinkText}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  desktopNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    marginHorizontal: 12,
    paddingVertical: 8,
  },
  navLinkText: {
    fontSize: 16,
    color: '#333',
  },
  searchContainer: {
    flex: 1,
    maxWidth: 300,
    marginLeft: 20,
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  mobileMenuButton: {
    padding: 8,
  },
  hamburgerIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: '#333',
    borderRadius: 1,
  },
  mobileOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
  },
  mobileMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.8,
    height: height,
    backgroundColor: '#fff',
    zIndex: 999,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  mobileMenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  mobileBrandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  mobileMenuIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileIcon: {
    marginLeft: 16,
    padding: 8,
  },
  iconText: {
    fontSize: 18,
  },
  mobileNavLinks: {
    flex: 1,
  },
  mobileNavLink: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mobileNavLinkText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Navbar; 