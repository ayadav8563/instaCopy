import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { HomeHeader, Stories } from '_components';
import { Colors } from '_styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <HomeHeader />
        <Stories />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black},
})