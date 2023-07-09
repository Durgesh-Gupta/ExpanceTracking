import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getTheme from '../../components/Theme';

const Home = () => {
  const theme = getTheme();

  return (
    <ScrollView
      style={[
        {backgroundColor: theme.background, flex: 1},
        styles.mainContainer,
      ]}>
      <View>
        <Text style={[styles.HeaderTitle]}>Hello Durgesh</Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
  },
  HeaderTitle: {
    fontSize: 36,
    borderWidth: 1,
    borderColor: 'yellow',
    paddingTop: 20,
  },
});
