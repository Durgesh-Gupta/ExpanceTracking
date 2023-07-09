import {useColorScheme} from 'react-native';

const theme = {
  light: {
    primary: '#000000', // Black
    secondary: '#00FFFF', // Neon Blue
    background: '#FFFFFF', // White
    text: '#000000', // Black
    accent: '#FF4081', // Pink
    // Add more color variables for light mode if needed
  },
  dark: {
    primary: '#000000', // Black
    secondary: '#00FFFF', // Neon Blue
    background: '#1F2125', // Dark Background Color
    text: '#FFFFFF', // White
    accent: '#FF4081', // Pink
    // Add more color variables for dark mode if needed
  },
};

const getTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? theme.dark : theme.light;
};

export default getTheme;
