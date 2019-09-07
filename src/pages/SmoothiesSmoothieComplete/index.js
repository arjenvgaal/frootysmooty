import React, { useState } from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.smoothies.smoothie-complete.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 125,
    left: 165,
  },
  size: {
    width: 50,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const SmoothiesSmoothieComplete = ({ navigation }) => {
  return (
    <PageBackground source={screen}>
      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => navigation.navigate('Smoothies')}
      />
    </PageBackground>
  );
};

export default withNavigation(SmoothiesSmoothieComplete);
