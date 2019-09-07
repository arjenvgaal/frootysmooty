import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import StyledButton from '../StyledButton';

const backButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 25,
    left: 5,
  },
  size: {
    width: 50,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const BackButton = ({ onPress }) => (
  <StyledButton
    style={[backButtonStyles.position, backButtonStyles.size]}
    onPress={onPress}
  />);

export default BackButton;
