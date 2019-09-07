import React, {useState} from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.smoothies.smoothie.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";
import BackButton from "../../components/BackButton";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 60,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const secondaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 5,
    left: 70,
  },
  size: {
    width: 240,
    height: 40,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const SmoothiesSmoothie = ({ navigation }) => {
  return (
    <PageBackground source={screen}>
      <BackButton onPress={() => navigation.navigate('Smoothies')} />

      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => navigation.navigate('SmoothiesSmoothieComplete')}
      />
      <StyledButton
        style={[secondaryButtonStyles.position, secondaryButtonStyles.size]}
        onPress={() => navigation.navigate('Smoothies')}
      />
    </PageBackground>
  );
};

export default withNavigation(SmoothiesSmoothie);
