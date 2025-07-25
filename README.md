# Collabera Assessment

A React Native application with three interactive challenges demonstrating different UI components and navigation patterns.

## Project Structure

```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── pages/
│   ├── challengeOne/
│   │   ├── components/
│   │   └── screens/
│   │       ├── home/
│   │       │   └── HomeScreen.tsx
│   │       └── challengeOne/
│   │           └── ChallengeOneScreen.tsx
│   ├── challengeTwo/
│   │   ├── components/
│   │   └── screens/
│   │       └── challengeTwo/
│   │           └── ChallengeTwoScreen.tsx
│   └── challengeThree/
│       ├── components/
│       └── screens/
│           └── challengeThree/
│               └── ChallengeThreeScreen.tsx
├── shared/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   └── theme/
├── core/
│   ├── api/
│   ├── config/
│   ├── store/
│   └── types/
└── navigation/
    └── AppNavigator.tsx
```

## Challenges

### Challenge 1 - Calculator
A fully functional calculator with:
- Basic arithmetic operations (+, -, ×, ÷)
- Clear functionality
- Percentage and sign change operations
- iOS-style design

### Challenge 2 - Custom Navbar
A custom navigation bar with:
- Four tabs: Home, Search, Favorites, Profile
- Active state indicators
- Smooth tab switching
- Custom styling

### Challenge 3 - Interactive Features
A demonstration of various interactive features:
- Counter with increment/decrement
- Color theme selection
- Alert dialogs
- Responsive design

## Getting Started

### Prerequisites
- Node.js (>=18)
- React Native CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS, install pods:
```bash
cd ios && pod install && cd ..
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run the app:

For iOS:
```bash
npm run ios
```

For Android:
```bash
npm run android
```

## Navigation

The app uses React Navigation with a stack navigator. The main screen shows three buttons that navigate to each challenge:

- **Challenge 1 - Calculator**: Navigate to a functional calculator
- **Challenge 2 - Navbar**: Navigate to a custom navigation bar demo
- **Challenge 3**: Navigate to interactive features demo

## Technologies Used

- React Native 0.80.2
- React Navigation 6
- TypeScript
- React Native Screens
- React Native Safe Area Context

## Features

- Type-safe navigation with TypeScript
- Modern React Native patterns
- Responsive design
- Interactive UI components
- Clean project structure
