import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  WIDTH: width,
  HEIGHT: height,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
};

export const DEVICE = {
  SMALL: 375,
  MEDIUM: 768,
  LARGE: 1024,
};
