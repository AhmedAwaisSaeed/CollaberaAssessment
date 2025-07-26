import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Platform checks
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// Screen dimensions
export const screenWidth = width;
export const screenHeight = height;

// Responsive breakpoints
export const isMobile = width < 768;
export const isTablet = () => {
  const { width: currentWidth, height: currentHeight } = Dimensions.get('window');
  const aspectRatio = currentHeight / currentWidth;
  return aspectRatio <= 1.6;
};

// Device size checks
export const isSmallDevice = () => screenWidth < 375;
export const isLargeDevice = () => screenWidth > 768;
