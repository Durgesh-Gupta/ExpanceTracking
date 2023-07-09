import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import getTheme from './Theme';
import Expense from '../screens/Expense';
import Task from '../screens/Task';
import Remainder from '../screens/Remainder';

const AppNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = getTheme();

  return (
    // <>
    //   <SafeAreaView>
    //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: theme.primary}}
        activeColor={theme.secondary} // Set the active tab color
        inactiveColor={theme.text}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/images/home.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Expense"
          component={Expense}
          options={{
            tabBarLabel: 'Expense',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/images/cash.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Task}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/images/checklist.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Remainder"
          component={Remainder}
          options={{
            tabBarLabel: 'Remainder',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/images/note.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: theme.background,
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/images/profile.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    //   </SafeAreaView>
    // </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
