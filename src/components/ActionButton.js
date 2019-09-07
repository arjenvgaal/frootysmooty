import React from 'react';
import { StyleSheet } from 'react-native';
import StyledButton from './StyledButton';
import { background } from "../styles";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom:0,
    right:0,
  },
  size: {
    width: 100,
    height: 100,
    backgroundColor: background,
  }
});

const ActionButton = ({ style, onPress, ...props }) => (
  <StyledButton
    style={[styles.position, styles.size]}
    onPress={onPress}
    {...props}
  />
);

export default ActionButton;
