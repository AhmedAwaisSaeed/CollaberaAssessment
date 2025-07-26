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

## Demo Video

You can watch a demo of all three challenges here:
[Demo Video - Collabera Assessment](https://drive.google.com/file/d/16jhRNtN01ci2_7W7oWx8hKJh-CZimqgs/view?usp=sharing)

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

### Challenge 3 - Two Sum II: Input Array Is Sorted
Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 < numbers.length`. Return the indices of the two numbers, added by one, as an integer array `[index1, index2]` of length 2.

- The tests are generated such that there is exactly one solution.
- You may not use the same element twice.
- Your solution must use only constant extra space.

#### Example Usage
```typescript
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      // Return 1-based indices
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// Example calls:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log(twoSum([2, 3, 4], 6));      // Output: [1, 3]
console.log(twoSum([-1, 0], -1));       // Output: [1, 2]
```

#### Example Explanations
- Input: numbers = [2, 7, 11, 15], target = 9
  - Output: [1, 2] (2 + 7 = 9)
- Input: numbers = [2, 3, 4], target = 6
  - Output: [1, 3] (2 + 4 = 6)
- Input: numbers = [-1, 0], target = -1
  - Output: [1, 2] (-1 + 0 = -1)

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
