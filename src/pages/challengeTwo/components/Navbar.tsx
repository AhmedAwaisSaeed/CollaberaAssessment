import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
} from 'react-native';
import { isMobile, screenWidth, screenHeight } from '../../../shared/utils';
import { colors } from '../../../shared/theme';

/**
 * Reusable Navbar Component
 * 
 * A responsive navigation bar that adapts to desktop and mobile views with customizable props.
 * 
 * @example
 * // Basic usage with default props
 * <Navbar title="My App" />
 * 
 * @example
 * // Custom navigation links and colors
 * <Navbar 
 *   title="My Brand"
 *   navigationLinks={['Home', 'About', 'Contact']}
 *   brandColor="#ff6b6b"
 *   backgroundColor="#f8f9fa"
 *   onNavLinkPress={(link) => console.log(`Clicked: ${link}`)}
 * />
 * 
 * @example
 * // Without search functionality
 * <Navbar 
 *   title="Simple Nav"
 *   showSearch={false}
 *   navigationLinks={['Home', 'About']}
 * />
 */

interface NavbarProps {
  /** The brand/title text displayed in the navbar */
  title?: string;
  /** Array of navigation links to display */
  navigationLinks?: string[];
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Callback function when a navigation link is pressed */
  onNavLinkPress?: (link: string) => void;
  /** Callback function when search text changes */
  onSearchChange?: (text: string) => void;
  /** Whether to show the search input (default: true) */
  showSearch?: boolean;
  /** Color for the brand title and active elements */
  brandColor?: string;
  /** Background color of the navbar */
  backgroundColor?: string;
  /** Color for navigation link text */
  textColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  title = 'AEON',
  navigationLinks = ['Showcase', 'Docs', 'Blog', 'Analytics', 'Templates', 'Enterprise'],
  searchPlaceholder = 'Search documentation...',
  onNavLinkPress,
  onSearchChange,
  showSearch = true,
  brandColor = colors.primary,
  backgroundColor = colors.background,
  textColor = colors.text
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-screenWidth));
  const [searchText, setSearchText] = useState('');

  const handleNavLinkPress = (link: string) => {
    console.log(`Navigating to: ${link}`);
    if (onNavLinkPress) {
      onNavLinkPress(link);
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    if (onSearchChange) {
      onSearchChange(text);
    }
  };

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu, current state:', isMobileMenuOpen);
    if (isMobileMenuOpen) {
      // Close menu
      Animated.timing(slideAnim, {
        toValue: -screenWidth,
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

  const dynamicStyles = StyleSheet.create({
    desktopNavbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: backgroundColor,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    brandTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: brandColor,
    },
    navLinkText: {
      fontSize: 16,
      color: textColor,
    },
    mobileBrandTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: brandColor,
    },
    mobileNavLinkText: {
      fontSize: 18,
      color: textColor,
    },
    mobileMenu: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: screenWidth * 0.8,
      height: screenHeight,
      backgroundColor: backgroundColor,
      zIndex: 999,
      paddingTop: 20,
      paddingHorizontal: 20,
    },
  });

  return (
    <>
      {/* Desktop Navbar */}
      <View style={dynamicStyles.desktopNavbar}>
        <Text style={dynamicStyles.brandTitle}>{title}</Text>
        
        {!isMobile && (
          <View style={styles.navLinks}>
            {navigationLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.navLink}
                onPress={() => handleNavLinkPress(link)}
              >
                <Text style={dynamicStyles.navLinkText}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {!isMobile && showSearch && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder={searchPlaceholder}
              placeholderTextColor={colors.subtitle}
              value={searchText}
              onChangeText={handleSearchChange}
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
            dynamicStyles.mobileMenu,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <View style={styles.mobileMenuHeader}>
            <Text style={dynamicStyles.mobileBrandTitle}>{title}</Text>
            <View style={styles.mobileMenuIcons}>
              {showSearch && (
                <TouchableOpacity style={styles.mobileIcon}>
                  <Text style={styles.iconText}>🔍</Text>
                </TouchableOpacity>
              )}
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
                <Text style={dynamicStyles.mobileNavLinkText}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    marginHorizontal: 12,
    paddingVertical: 8,
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
    color: colors.text,
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
    backgroundColor: colors.text,
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
  mobileMenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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
});

export default Navbar; 